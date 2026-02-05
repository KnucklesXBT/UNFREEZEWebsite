import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${SITE.APP_NAME}.`,
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <article className="prose">
      <h1>Terms of Use</h1>
      <p>
        <strong>Effective date:</strong> {SITE.EFFECTIVE_DATE}
      </p>

      <p>
        These Terms of Use (“Terms”) govern your use of {SITE.APP_NAME} (the “App”) and this website, provided by{" "}
        {SITE.COMPANY_NAME} (“we”, “us”, or “our”). By using the App, you agree to these Terms.
      </p>

      <h2>Use of the App</h2>
      <ul>
        <li>You may use the App for lawful purposes only.</li>
        <li>You agree not to misuse the App or attempt to disrupt its operation.</li>
      </ul>

      <h2>Subscriptions</h2>
      <ul>
        <li>
          The App may offer auto‑renewing subscriptions. Payment is charged to your Apple ID account at confirmation of
          purchase.
        </li>
        <li>
          Subscriptions automatically renew unless auto‑renew is turned off at least 24 hours before the end of the
          current period.
        </li>
        <li>
          You can manage or cancel your subscription in iOS: <strong>Settings</strong> →{" "}
          <strong>[your name]</strong> → <strong>Subscriptions</strong>.
        </li>
        <li>
          If the app includes a “Restore Purchases” option, you can use it to restore access on a device using the
          same Apple ID.
        </li>
        <li>Billing and refunds (if any) are handled by Apple according to Apple’s policies.</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        The App and its content are owned by {SITE.COMPANY_NAME} or its licensors and are protected by applicable laws.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The App is provided “as is” and “as available” without warranties of any kind, whether express or implied,
        including merchantability, fitness for a particular purpose, and non‑infringement. We do not warrant that the
        App will be uninterrupted or error‑free.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE.COMPANY_NAME} will not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to
        your use of the App.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate access to the App at any time if you violate these Terms or if we discontinue the
        App.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of {SITE.GOVERNING_LAW}, without regard to conflict of laws principles.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these Terms, contact{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>
    </article>
  );
}
