import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for UNFREEZE.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <article className="prose">
      <h1>Terms of Use</h1>
      <p>
        <strong>Effective date:</strong> February 5, 2026
      </p>
      <p>
        <strong>Developer:</strong> Jacopo Alilla
      </p>
      <p>
        <strong>Contact:</strong> support@unfreeze-app.com
      </p>

      <p>
        These Terms of Use ("Terms") govern your use of the UNFREEZE mobile application ("App"). By using the App, you
        agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>You must be legally able to enter into this agreement and use the App in compliance with applicable laws.</p>

      <h2>2. License</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal,
        non-commercial use, subject to these Terms.
      </p>

      <h2>3. Subscriptions (Auto-Renewable)</h2>
      <p>UNFREEZE offers auto-renewable subscriptions through Apple In-App Purchases.</p>
      <ul>
        <li>Payment is charged to your Apple ID at confirmation of purchase.</li>
        <li>
          Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period.
        </li>
        <li>Your account is charged for renewal within 24 hours prior to the end of the current period.</li>
        <li>You can manage and cancel subscriptions in your Apple ID account settings.</li>
        <li>
          Any free trial (if offered) converts to a paid subscription unless canceled before trial end.
        </li>
        <li>Refunds are handled by Apple under Apple&apos;s policies.</li>
        <li>Current subscription options, durations, and prices are displayed in-app before purchase.</li>
      </ul>

      <h2>4. Privacy</h2>
      <p>Your use of the App is also governed by our Privacy Policy: https://www.unfreeze-app.com/privacy</p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for unlawful purposes.</li>
        <li>Attempt to reverse engineer, disrupt, or interfere with App operation.</li>
        <li>Abuse or overload the service infrastructure.</li>
      </ul>

      <h2>6. AI-Generated Content Disclaimer</h2>
      <p>
        The App may provide AI-generated task suggestions and breakdowns. These outputs are informational only and may
        be incomplete or inaccurate. You remain solely responsible for decisions and actions.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        The App, including its design, branding, and software, is owned by us or our licensors and is protected by
        applicable intellectual property laws.
      </p>

      <h2>8. Termination</h2>
      <p>We may suspend or terminate access if you violate these Terms or misuse the App.</p>

      <h2>9. Disclaimers</h2>
      <p>
        The App is provided "as is" and "as available," without warranties of any kind to the maximum extent permitted
        by law.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or
        punitive damages arising from your use of the App.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of United Arab Emirates, without regard to conflict-of-law principles.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We may update these Terms. Continued use of the App after updates means you accept the revised Terms.
      </p>

      <h2>13. Contact</h2>
      <p>Questions: support@unfreeze-app.com</p>
    </article>
  );
}
