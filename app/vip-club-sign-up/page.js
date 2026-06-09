import VipSignupForm from '@/components/VipSignupForm';

export const metadata = {
  title: "Join the VIP Email Club — Duke's Seafood",
  description: "Sign up for Duke's Seafood Email Club. A free 2-for-1 dinner to start, a free entree every birthday, and up to $20 off your next meal whenever you dine and check in.",
};

export default function VipSignup() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">Better than a reward</p>
            <h1 className="h-display">Join the <em>Email Club</em>.</h1>
            <p className="lede">One free entree to start, dinner on us every birthday, and up to $20 off your next meal each time you dine. Six restaurants around the Puget Sound, one membership.</p>
          </div>
          <div className="form-panel">
            <VipSignupForm />
          </div>
        </div>
      </section>
    </>
  );
}
