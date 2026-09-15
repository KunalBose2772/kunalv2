import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Values",
  description:
    "Founded in 2019, Built by Kunal has grown from 3 engineers to a global team of 30+ specialists. Learn about our mission, company values, leadership team, and what makes us the right technology partner.",
  alternates: { canonical: "https://builtbykunal.online/about" },
  openGraph: {
    title: "About Built by Kunal — Our Story, Team & Values",
    description: "From 3 engineers to a global technology partner. Meet our team and learn what drives us.",
    url: "https://builtbykunal.online/about",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AboutPage />;
}
