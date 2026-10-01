import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Our Story | Magic Marble Foundation",
  description:
    "From a small rescue mission to a global movement for animal welfare.",
};

export default function OurStoryPage() {
  return (
    <ContentPage
      title="Our Story"
      description="From a small rescue mission to a global movement for animal welfare."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
