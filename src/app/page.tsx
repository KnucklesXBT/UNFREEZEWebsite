import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: SITE.APP_NAME,
  description: SITE.ONE_LINE_PITCH,
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <section className="prose">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{SITE.APP_NAME}</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/support" className="btn-primary">
          Get Support
        </Link>
        <Link href="/privacy" className="btn-secondary">
          Privacy Policy
        </Link>
        <Link href="/terms" className="btn-secondary">
          Terms of Use
        </Link>
      </div>

      <p className="mt-10 text-sm text-[color:var(--muted)]">
        Looking for help? Visit <Link href="/support">Support</Link> or email{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>
    </section>
  );
}
