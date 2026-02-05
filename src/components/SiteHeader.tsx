import Link from "next/link";
import { SITE } from "@/config/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="border-b border-[color:var(--border)] py-4 sm:py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {SITE.APP_NAME}
        </Link>
        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <nav className="flex items-center gap-3 text-sm sm:gap-4">
            <Link className="link-nav" href="/support">
              Support
            </Link>
            <Link className="link-nav" href="/privacy">
              Privacy
            </Link>
            <Link className="link-nav" href="/terms">
              Terms
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

