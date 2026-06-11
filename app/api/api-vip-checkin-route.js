// 3.4 — Bridge VIP check-ins to the live WordPress Gravity Forms REST API.
// INERT until these env vars are set in Vercel:
//   GF_API_BASE          e.g. https://dukesseafood.com/wp-json/gf/v2
//   GF_CHECKIN_FORM_ID   the live check-in form's numeric ID
//   GF_CONSUMER_KEY / GF_CONSUMER_SECRET  (GF Settings -> REST API)
// Field-ID mapping (input_N) must match the live form — pull from the GF admin.

export async function POST(request) {
  const base = process.env.GF_API_BASE;
  const formId = process.env.GF_CHECKIN_FORM_ID;
  const key = process.env.GF_CONSUMER_KEY;
  const secret = process.env.GF_CONSUMER_SECRET;

  if (!base || !formId || !key || !secret) {
    return Response.json({ ok: false, error: 'forms_not_configured' }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  const { email, loc } = body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !loc) {
    return Response.json({ ok: false, error: 'invalid_input' }, { status: 422 });
  }

  // TODO: confirm these input_N IDs against the live check-in form in GF admin.
  const payload = {
    input_1: email,
    input_2: loc,
  };

  const auth = Buffer.from(`${key}:${secret}`).toString('base64');
  try {
    const res = await fetch(`${base}/forms/${formId}/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Basic ${auth}` },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return Response.json({ ok: false, error: 'gf_rejected' }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: 'gf_unreachable' }, { status: 502 });
  }
}
