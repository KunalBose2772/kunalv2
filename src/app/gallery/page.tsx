import type { Metadata } from "next";
import GalleryPage from "./GalleryPage";

export const metadata: Metadata = {
  title: "Our Gallery — Life & Office at Built by Kunal",
  description:
    "Explore the visual journey of Built by Kunal. View our premium workspace, collaborative brainstorming sessions, and company culture events.",
  alternates: { canonical: "https://builtbykunal.online/gallery" },
};

export default function Page() {
  return <GalleryPage />;
}
