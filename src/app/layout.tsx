import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Bricolage_Grotesque, Playfair_Display, Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import OnboardingModal from "@/components/shared/OnboardingModal";
import BookDemoModal from "@/components/shared/BookDemoModal";
import SupportChatbot from "@/components/shared/SupportChatbot";
import { Toaster } from "react-hot-toast";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const CRM_PATHS = ["/dashboard", "/admin", "/telecallers", "/superadmin"];

export const metadata: Metadata = {
  title: {
    default: "Built by Kunal — Full-Stack Developer & Digital Systems Architect",
    template: "%s | Built by Kunal",
  },
  description:
    "Architecting high-performance digital systems, custom web applications, SaaS platforms, and enterprise solutions. Portfolio & services of Kunal Bose.",
  metadataBase: new URL("https://builtbykunal.online"),
  keywords: [
    "Kunal Bose", "Built by Kunal", "Full-stack developer", "Next.js developer",
    "React developer", "SaaS development", "custom software development",
    "AI solutions", "cloud infrastructure", "web application development",
    "developer Ranchi", "software engineer portfolio"
  ],
  authors: [{ name: "Kunal Bose", url: "https://builtbykunal.online" }],
  creator: "Kunal Bose",
  publisher: "Built by Kunal",
  alternates: {
    canonical: "https://builtbykunal.online",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://builtbykunal.online",
    siteName: "Built by Kunal",
    title: "Built by Kunal — Full-Stack Developer & Digital Systems Architect",
    description:
      "Architecting high-performance digital systems, custom web applications, SaaS platforms, and enterprise solutions.",
    images: [
      {
        url: "/builtbykunal.png",
        width: 1200,
        height: 630,
        alt: "Built by Kunal",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KunalBose2772",
    creator: "@KunalBose2772",
    title: "Built by Kunal — Full-Stack Developer & Digital Systems Architect",
    description:
      "Architecting high-performance digital systems, custom web applications, and SaaS platforms.",
    images: ["/builtbykunal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── JSON-LD Structured Data ─────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://builtbykunal.online/#organization",
      name: "Built by Kunal",
      url: "https://builtbykunal.online",
      logo: {
        "@type": "ImageObject",
        url: "https://builtbykunal.online/images/logo.png",
        width: 400,
        height: 100,
      },
      sameAs: [
        "https://twitter.com/KunalBose2772",
        "https://linkedin.com/company/KunalBose2772ution",
        "https://github.com/KunalBose2772ution",
        "https://instagram.com/KunalBose2772ution",
        "https://facebook.com/KunalBose2772ution",
        "https://youtube.com/@KunalBose2772ution",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-90318-06381",
        contactType: "customer service",
        email: "kunal@builtbykunal.online",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://builtbykunal.online/#localbusiness",
      name: "Built by Kunal",
      image: "https://builtbykunal.online/images/og-image.png",
      url: "https://builtbykunal.online",
      telephone: "+91-90318-06381",
      email: "kunal@builtbykunal.online",
      description:
        "Premium technology company specializing in AI, SaaS, Enterprise Software, and Digital Transformation. Serving global clients from Ranchi, India.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "509, RR Tower, Ratu Road",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834005",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.3441,
        longitude: 85.3096,
      },
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "60",
        bestRating: "5",
        worstRating: "1",
      },
      hasMap: "https://maps.google.com/?q=509,RR+Tower,Ratu+Road,Ranchi,Jharkhand,834005",
    },
    {
      "@type": "WebSite",
      "@id": "https://builtbykunal.online/#website",
      url: "https://builtbykunal.online",
      name: "Built by Kunal",
      description: "Engineering Tomorrow's Digital Future",
      publisher: { "@id": "https://builtbykunal.online/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://builtbykunal.online/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const isCRM = CRM_PATHS.some((p) => pathname.startsWith(p));

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${bricolage.variable} ${playfair.variable} ${sora.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={isCRM ? `${inter.className} crm-shell antialiased overflow-x-hidden` : `${inter.className} antialiased overflow-x-hidden`}
        style={
          isCRM
            ? { background: "var(--crm-bg)", color: "var(--crm-text)" }
            : { background: "var(--bg-primary)", color: "var(--text-secondary)" }
        }
        suppressHydrationWarning
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: isCRM
              ? {
                  background: "#ffffff",
                  color: "#0a0a0c",
                  border: "1px solid #e6e8ed",
                  borderRadius: "12px",
                  fontSize: "13px",
                  boxShadow: "0 8px 24px -8px rgba(16,24,40,0.12)",
                }
              : {
                  background: "var(--bg-surface)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  fontSize: "13px",
                },
          }}
        />

        {isCRM ? (
          children
        ) : (
          <>
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
            <ScrollToTop />
            <OnboardingModal />
            <BookDemoModal />
            <SupportChatbot />
          </>
        )}
      </body>
    </html>
  );
}
