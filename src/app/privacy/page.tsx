import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for UNFREEZE.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <article className="prose">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> February 5, 2026
      </p>
      <p>
        <strong>Developer:</strong> Jacopo Alilla ("we," "us," "our")
      </p>
      <p>
        <strong>Contact:</strong> support@unfreeze-app.com
      </p>

      <p>
        UNFREEZE ("App") helps users break tasks into steps, plan tasks, track progress, and optionally receive
        reminders.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>A) Information you provide in the App</h3>
      <p>
        Task and planning data (task text, category, schedule, deadlines, reminder preferences, completion/progress
        status).
      </p>
      <p>
        Optional profile details you choose to enter (for example: preferences used to personalize task breakdowns).
      </p>
      <p>
        Optional profile image reference (if you select one on-device).
      </p>
      <h3>B) Subscription and purchase information</h3>
      <p>
        If you purchase a subscription, payments are processed by Apple. We receive subscription-related status
        information needed to activate and manage access (for example: entitlement status, product ID, renewal status)
        via Apple and RevenueCat.
      </p>
      <h3>C) Device and technical information</h3>
      <p>
        We may process limited technical/diagnostic information needed to operate, secure, and troubleshoot the App
        (for example: app version, OS version, device type, crash/error diagnostics).
      </p>
      <h3>D) Notifications</h3>
      <p>
        If you enable reminders, the App requests notification permission and schedules local notifications on your
        device.
      </p>

      <h2>2. Information We Do Not Collect</h2>
      <ul>
        <li>No required account registration for core use of the App.</li>
        <li>
          No advertising ID use for cross-app tracking.
        </li>
        <li>No sale of personal information.</li>
        <li>
          No intentional collection of precise location, contacts, or photo library content beyond what you explicitly
          choose to provide for optional features.
        </li>
      </ul>

      <h2>3. How We Use Information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide core App functionality.</li>
        <li>Generate AI task breakdowns when requested.</li>
        <li>Manage subscriptions and restore purchases.</li>
        <li>Send reminders you explicitly enable.</li>
        <li>Maintain reliability, security, and support.</li>
      </ul>

      <h2>4. How We Share Information</h2>
      <p>We share information only as necessary to operate the App:</p>
      <ul>
        <li>Apple: billing, subscriptions, and purchase restoration.</li>
        <li>RevenueCat: subscription entitlement and status management.</li>
        <li>AI provider(s) (currently Groq): processing task breakdown requests.</li>
        <li>Infrastructure/service providers: hosting and technical operations.</li>
      </ul>
      <p>
        We do not sell your personal information and we do not use third-party advertising networks for behavioral ad
        targeting.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain information only as long as reasonably necessary for the purposes above, including legal, security,
        accounting, and dispute-resolution needs. Data retained locally on your device may be removed by deleting tasks
        or clearing app data in-app (if available) or uninstalling the App.
      </p>

      <h2>6. Your Choices and Rights</h2>
      <p>You can:</p>
      <ul>
        <li>Disable notifications in iOS Settings and/or in-app settings.</li>
        <li>Delete tasks and local app data in the App.</li>
        <li>Manage or cancel subscriptions in Apple ID subscription settings.</li>
        <li>Request data deletion/help by contacting support@unfreeze-app.com.</li>
      </ul>
      <p>
        We respond to valid privacy requests within a reasonable timeframe and as required by applicable law.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        UNFREEZE is not directed to children under 13, and we do not knowingly collect personal information from
        children under 13.
      </p>

      <h2>8. International Processing</h2>
      <p>
        Your information may be processed in countries other than your own, which may have different data protection
        laws.
      </p>

      <h2>9. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational safeguards. No method of transmission or
        storage is completely secure.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. We will post updates and revise the effective date above.
      </p>

      <h2>11. Contact</h2>
      <p>Privacy questions or requests: support@unfreeze-app.com</p>
    </article>
  );
}
