import "./globals.css";
import type { Metadata } from "next";
import { invite } from "@/invite.config";

export const metadata: Metadata = {
  title: invite.meta.title,
  description: invite.meta.description,
  metadataBase: new URL(invite.meta.siteUrl || "http://localhost:3000"),
  openGraph: {
    title: invite.meta.title,
    description: invite.meta.description,
    url: invite.meta.siteUrl || "",
    images: invite.meta.ogImage ? [{ url: invite.meta.ogImage }] : undefined,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
