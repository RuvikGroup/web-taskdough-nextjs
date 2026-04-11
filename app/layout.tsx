import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taskdough.com"),
  title: "Task Dough — Turn Your Spare Time Into Cold Cash",
  description:
    "The ultimate high-performance earning platform. Complete simple tasks, unlock daily bonuses, and withdraw your earnings instantly via PayPal, Crypto, or Bank Transfer.",
  keywords: ["earn money online", "tasks for cash", "micro tasks", "instant payout", "task dough"],
  authors: [{ name: "Task Dough" }],
  openGraph: {
    type: "website",
    title: "Task Dough — Turn Your Spare Time Into Cold Cash",
    description:
      "Complete simple tasks, unlock daily bonuses, and withdraw your earnings instantly.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Task Dough — Turn Your Spare Time Into Cold Cash",
    description: "Complete simple tasks, unlock daily bonuses, and withdraw instantly.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Task Dough",
      url: "https://taskdough.com",
    },
    {
      "@type": "Organization",
      name: "Task Dough",
      url: "https://taskdough.com",
      logo: "https://taskdough.com/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
