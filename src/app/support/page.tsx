import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Support for ${SITE.APP_NAME}.`,
  alternates: { canonical: "/support" }
};

export default function SupportPage() {
  return (
    <article className="prose">
      <h1>Support</h1>

      <p>
        If you need help, email{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>

      <h2>Subscription &amp; Billing</h2>
      <ul>
        <li>
          Subscriptions are billed through Apple In‑App Purchases and managed through your Apple ID.
        </li>
        <li>
          You can view, change, or cancel your subscription in iOS: <strong>Settings</strong> →{" "}
          <strong>[your name]</strong> → <strong>Subscriptions</strong>.
        </li>
        <li>
          We use RevenueCat only to help manage and verify subscription status/entitlements. No account is required.
        </li>
      </ul>

      <h2>FAQ</h2>
      <h3>How do I cancel my subscription?</h3>
      <p>
        Apple manages all cancellations. On your iPhone or iPad, go to{" "}
        <strong>Settings</strong> → <strong>[your name]</strong> →{" "}
        <strong>Subscriptions</strong>, then select {SITE.APP_NAME} and cancel.
      </p>

      <h3>How do I restore purchases?</h3>
      <p>
        If the app includes a “Restore Purchases” option, use it while signed in to the same Apple ID that purchased
        the subscription. If restoration doesn’t work, contact us at{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>

      <h3>The app isn’t working. What should I do?</h3>
      <p>
        Try closing and reopening the app, and confirm you’re on the latest iOS version. If the issue continues, email{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>{" "}
        with a brief description of what happened and any relevant screenshots.
      </p>

      <h2>Contact</h2>
      <p>
        Email us anytime at{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>
    </article>
  );
}
