import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#06080d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Eternity Techsoft | High-Impact Software Services & Flagship Products",
  description:
    "Eternity Techsoft is a premier software engineering services and product development company. Creators of K-Sign (Digital Trust & E-Sign Suite) and Geomeridian (Geospatial Intelligence Platform).",
  keywords: [
    "Eternity Techsoft",
    "software development company",
    "enterprise software services",
    "K-Sign",
    "digital signature software",
    "Geomeridian",
    "GIS software",
    "geospatial intelligence",
    "custom software development",
    "cloud architecture",
    "AI automation",
  ],
  authors: [{ name: "Eternity Techsoft Engineering Team" }],
  openGraph: {
    title: "Eternity Techsoft | Software Services & Flagship Products",
    description:
      "Engineering the future of enterprise software, digital trust with K-Sign, and geospatial intelligence with Geomeridian.",
    url: "https://eternitytechsoft.com",
    siteName: "Eternity Techsoft",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternity Techsoft | Software Services & Products",
    description:
      "Enterprise software engineering services & creators of K-Sign and Geomeridian.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('eternity-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#06080d] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
