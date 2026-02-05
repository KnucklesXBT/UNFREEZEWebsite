import { SITE } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] py-8 sm:py-10">
      <div className="text-sm text-[color:var(--muted)]">
        <p>
          © {year} {SITE.COMPANY_NAME}. Contact:{" "}
          <a className="underline" href={`mailto:${SITE.SUPPORT_EMAIL}`}>
            {SITE.SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
