import Link from "next/link";
import { SITE } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 py-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight">
          {SITE.APP_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link className="text-neutral-700 hover:text-neutral-900" href="/support">
            Support
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/privacy">
            Privacy
          </Link>
          <Link className="text-neutral-700 hover:text-neutral-900" href="/terms">
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}

