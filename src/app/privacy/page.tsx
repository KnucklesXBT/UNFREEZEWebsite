import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.APP_NAME}.`,
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <article className="prose">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> {SITE.EFFECTIVE_DATE}
      </p>

      <p>
        This Privacy Policy explains how {SITE.COMPANY_NAME} (“we”, “us”, or “our”) collects and uses information when
        you use {SITE.APP_NAME} (the “App”) and this website.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>No login or user accounts are required to use the App.</li>
        <li>Subscriptions are purchased through Apple In‑App Purchases.</li>
        <li>We use RevenueCat to help manage subscription status/entitlements.</li>
        <li>We do not run advertising and we do not track you across apps or websites.</li>
        <li>This website does not use analytics trackers or advertising cookies.</li>
      </ul>

      <h2>Information We Collect</h2>
      <h3>Subscription and purchase information</h3>
      <p>
        When you purchase or restore a subscription, Apple and our subscription service provider (RevenueCat) may
        provide us with purchase/subscription status and related identifiers necessary to validate your entitlement.
        This may include information such as subscription state, renewal status, product identifiers, and receipts or
        receipt-related identifiers.
      </p>

      <h3>Device and app information</h3>
      <p>
        We may collect limited technical information needed to operate the service and diagnose issues, such as device
        type, operating system version, app version, and basic diagnostic data.
      </p>

      <h2>Information We Do Not Collect</h2>
      <p>
        We do not require you to provide personal profile information. We do not intentionally collect your name,
        home address, phone number, precise location, contacts, photos, or other sensitive personal data to provide the
        App’s core functionality.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To provide and maintain subscription entitlements and verify purchase status.</li>
        <li>To provide customer support and respond to requests.</li>
        <li>To troubleshoot, secure, and improve the App’s reliability and performance.</li>
      </ul>

      <h2>How Information Is Shared</h2>
      <p>
        We share and/or receive information only as needed to deliver subscriptions and operate the App:
      </p>
      <ul>
        <li>
          <strong>Apple</strong>: Apple processes payments and manages subscriptions via your Apple ID.
        </li>
        <li>
          <strong>RevenueCat</strong>: We use RevenueCat as a service provider to help manage subscription status and
          entitlements.
        </li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain information only for as long as reasonably necessary for the purposes described above, such as
        maintaining subscription entitlements, meeting legal obligations, resolving disputes, and enforcing agreements.
      </p>

      <h2>Your Choices and Deletion Requests</h2>
      <p>
        If you have questions about your data or would like to request deletion of information we may hold, contact us
        at <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>. We will respond in a reasonable timeframe.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        The App is not directed to children under 13, and we do not knowingly collect personal information from
        children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will update the effective date above when we make
        changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        For privacy questions, contact{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>
    </article>
  );
}
