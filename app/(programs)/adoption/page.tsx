import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Adoption | Magic Marble Foundation",
  description:
    "Connecting rescued animals with loving forever homes through our comprehensive adoption process.",
};

export default function AdoptionPage() {
  return (
    <ContentPage
      title="Adoption"
      description="Connecting rescued animals with loving forever homes through our comprehensive adoption process."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
