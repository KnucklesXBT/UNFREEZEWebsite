import { SITE } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 py-10">
      <div className="text-sm text-neutral-600">
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

