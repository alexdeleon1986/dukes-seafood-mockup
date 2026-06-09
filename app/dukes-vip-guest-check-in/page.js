import VipCheckinForm from '@/components/VipCheckinForm';

export const metadata = {
  title: "VIP Guest Check-In — Duke's Seafood",
  description: "Duke's Email Club members: check in with your email and location after you dine, and we'll send a gift good for up to $20 off your next visit.",
};

export default function VipCheckin() {
  return (
    <div className="page-simple">
      <section className="hero">
        <div className="shell">
          <div>
            <p className="eyebrow">Email Club</p>
            <h1 className="h-display">Welcome <em>back</em>.</h1>
            <p className="lede">Check in with your email and the location you visited. We&apos;ll send a gift from Duke within 24 hours, good toward your next meal. Print it or show the email to your server.</p>
          </div>
          <div className="form-panel">
            <VipCheckinForm />
          </div>
        </div>
      </section>
    </div>
  );
}
