import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/config/site";
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE.APP_NAME,
    template: `%s · ${SITE.APP_NAME}`
  },
  description: SITE.ONE_LINE_PITCH,
  metadataBase: new URL(`https://${SITE.YOURDOMAIN}`),
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <SiteHeader />
          <main className="py-10">{children}</main>
          <SiteFooter />
        </Container>
      </body>
    </html>
  );
}
