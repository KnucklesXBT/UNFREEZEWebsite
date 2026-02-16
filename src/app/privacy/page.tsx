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
        <strong>Effective date:</strong> February 16, 2026
      </p>
      <p>
        <strong>Developer / Provider:</strong> Jacopo Alilla ("UNFREEZE", "we", "us", "our")
      </p>
      <p>
        <strong>Contact:</strong> support@unfreeze-app.com
      </p>
      <p>
        <strong>Location:</strong> Dubai, United Arab Emirates
      </p>

      <p>
        UNFREEZE ("App") helps users break tasks into steps, plan tasks, track progress, and optionally receive
        reminders. This Privacy Policy explains what information we collect, how we use it, and how we share it.
      </p>

      <h2>1. INFORMATION WE COLLECT</h2>
      <h3>A) Information you provide in the App</h3>
      <p>We process information you enter or generate while using the App, such as:</p>
      <ul>
        <li>
          Task and planning data (task text, categories, schedules, deadlines, reminder preferences, completion/progress
          status)
        </li>
        <li>
          Optional profile details you choose to enter (e.g., preferences used to personalize task breakdowns)
        </li>
      </ul>

      <h3>B) Subscription and purchase information</h3>
      <p>
        If you purchase a subscription, payments are processed by Apple. We receive subscription-related status
        information needed to activate and manage access (for example: entitlement status, product identifiers,
        renewal/cancellation status) via Apple and our subscription processor (RevenueCat).
      </p>

      <h3>C) Device and technical information</h3>
      <p>
        We may process limited technical/diagnostic information needed to operate, secure, and troubleshoot the App
        (for example: app version, OS version, device type, crash/error diagnostics). We do not use this data for
        cross-app advertising tracking.
      </p>

      <h3>D) Notifications</h3>
      <p>
        If you enable reminders, the App will request notification permission and schedule notifications on your device
        (local notifications).
      </p>

      <h2>2. INFORMATION WE DO NOT COLLECT</h2>
      <ul>
        <li>No required account registration for core use of the App.</li>
        <li>No advertising ID (IDFA) collection for cross-app tracking.</li>
        <li>No sale of personal information.</li>
        <li>
          No intentional collection of precise location, contacts, or photo library content beyond what you explicitly
          choose to provide for optional features.
        </li>
      </ul>

      <h2>3. HOW WE USE INFORMATION</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide core App functionality (tasks, planning, progress tracking)</li>
        <li>Generate AI task breakdowns and suggestions when you request them</li>
        <li>Manage subscriptions and restore purchases</li>
        <li>Deliver reminders you explicitly enable</li>
        <li>Maintain reliability, security, and provide support</li>
      </ul>

      <h2>4. AI PROCESSING (THIRD-PARTY AI SERVICE)</h2>
      <p>
        When you use AI features (e.g., generating a task breakdown), the App sends limited user-provided information
        to a third-party AI processor to generate the response.
      </p>
      <p>
        <strong>AI Processor(s):</strong>
      </p>
      <ul>
        <li>Groq, Inc. (currently)</li>
      </ul>
      <p>
        <strong>
          What may be sent to the AI processor (depending on what you enter and the feature you use):
        </strong>
      </p>
      <ul>
        <li>Task text and instructions you provide</li>
        <li>Relevant preferences you include (e.g., how you want the breakdown formatted)</li>
        <li>
          Relevant task metadata you include (e.g., category or deadline), if you include it in the request
        </li>
      </ul>
      <p>
        <strong>What we do not require you to send:</strong>
      </p>
      <p>
        We do not require your real name, email address, contacts, precise location, or photo library content for AI
        features.
      </p>
      <p>
        <strong>Permission / consent:</strong>
      </p>
      <p>
        Before the first time AI processing occurs, the App asks for your permission to send the information above to
        the AI processor. You can stop using AI features at any time by not submitting content for AI processing.
      </p>
      <p>
        <strong>Storage and logging:</strong>
      </p>
      <p>
        We do not store your AI prompts or AI responses on our servers and we do not maintain server-side logs of your
        task content. AI processing occurs to generate the requested output.
      </p>

      <h2>5. HOW WE SHARE INFORMATION</h2>
      <p>We share information only as necessary to operate the App:</p>
      <ul>
        <li>Apple: billing, subscriptions, and purchase restoration</li>
        <li>RevenueCat: subscription entitlement and status management</li>
        <li>Groq: processing AI task breakdown requests</li>
        <li>
          Infrastructure/service providers: limited processing for app operations (e.g., basic hosting/monitoring),
          only as needed
        </li>
      </ul>
      <p>
        We do not sell your personal information and we do not use third-party advertising networks for behavioral ad
        targeting.
      </p>

      <h2>6. DATA RETENTION</h2>
      <p>
        We retain information only as long as reasonably necessary for the purposes described above, including legal,
        security, accounting, and dispute-resolution needs.
      </p>
      <p>
        Data stored locally on your device may be removed by deleting tasks, clearing app data (if available), or
        uninstalling the App.
      </p>
      <p>
        Subscription entitlement/status information received via Apple/RevenueCat is retained as needed to provide
        subscription access and comply with legal obligations.
      </p>

      <h2>7. YOUR CHOICES AND RIGHTS</h2>
      <p>You can:</p>
      <ul>
        <li>Disable notifications in iOS Settings and/or in-app settings</li>
        <li>Delete tasks and local app data in the App (if available) or by uninstalling the App</li>
        <li>Manage or cancel subscriptions in Apple ID subscription settings</li>
        <li>Request help or ask privacy questions by contacting support@unfreeze-app.com</li>
      </ul>
      <p>
        We respond to valid privacy requests within a reasonable timeframe and as required by applicable law.
      </p>

      <h2>8. CHILDREN&apos;S PRIVACY</h2>
      <p>
        The App is rated 4+. If a child uses the App, use must be supervised by a parent or legal guardian. We do not
        knowingly collect personal information from children without appropriate consent where required by applicable
        law. If you believe a child has provided personal information without required consent, contact us at
        support@unfreeze-app.com and we will address it.
      </p>

      <h2>9. INTERNATIONAL PROCESSING</h2>
      <p>
        Your information may be processed in countries other than your own, which may have different data protection
        laws. We take reasonable steps to protect information during such processing.
      </p>

      <h2>10. SECURITY</h2>
      <p>
        We use reasonable administrative, technical, and organizational safeguards. No method of transmission or
        storage is completely secure.
      </p>

      <h2>11. CHANGES TO THIS POLICY</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post updates and revise the effective date above.
      </p>

      <h2>12. CONTACT</h2>
      <p>Privacy questions or requests: support@unfreeze-app.com</p>
    </article>
  );
}
