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
      <h1 className="text-3xl font-semibold tracking-tight">{SITE.APP_NAME}</h1>
      <p className="text-neutral-700">{SITE.ONE_LINE_PITCH}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/support"
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Get Support
        </Link>
        <Link
          href="/privacy"
          className="rounded-md border border-black/15 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="rounded-md border border-black/15 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          Terms of Use
        </Link>
      </div>

      <p className="mt-10 text-sm text-neutral-600">
        Looking for help? Visit <Link href="/support">Support</Link> or email{" "}
        <a href={`mailto:${SITE.SUPPORT_EMAIL}`}>{SITE.SUPPORT_EMAIL}</a>.
      </p>
    </section>
  );
}
