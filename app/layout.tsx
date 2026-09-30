import type { Metadata, Viewport } from "next";
import "@fontsource-variable/jost";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Full Stackers Mentorship Program (FMP)", template: "%s · FMP" },
  description:
    "Get matched with a working engineer, designer or product lead. 1:1 tech mentorship across frontend, backend, design, mobile, cloud, data, security and product.",
  icons: { icon: "/brand/fmp-mark.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0F9FF" },
    { media: "(prefers-color-scheme: dark)", color: "#051026" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
