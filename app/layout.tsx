import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dentinalis- Implantes Dentários em 72h",
  description:
    "Especialistas em Implantes Dentários. Tenha dentes fixos em 72h com a técnica All-On-4. Mais de 15 anos de experiência em Criciúma - SC.",
  generator: "Belmond",
  icons: {
    icon: "icone.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" />

        {/* ✅ Google Tag Manager (HEAD) */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l] = w[l] || []; w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'}); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; 
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
            f.parentNode.insertBefore(j, f);
            })(window,document,'script','dataLayer','GTM-PZPT8N66');
          `}
        </Script>
      </head>

      <body className={`${inter.className} antialiased`}>
        {/* ✅ Google Tag Manager (noscript) — BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZPT8N66"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
