import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project Today",
  description:
    "Get in touch with Built by Kunal. Whether you have a project in mind or want a free 30-minute consultation — our team in Ranchi, India is ready to help. We serve clients worldwide.",
  alternates: { canonical: "https://builtbykunal.online/contact" },
  openGraph: {
    title: "Contact Built by Kunal — Start Your Project",
    description: "Reach out for a free consultation. We'd love to learn about your project and how we can help you succeed.",
    url: "https://builtbykunal.online/contact",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ContactPage />;
}
