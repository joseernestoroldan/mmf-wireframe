import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Rescue | Magic Marble Foundation",
  description:
    "Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide.",
};

export default function RescuePage() {
  return (
    <ContentPage
      title="Rescue"
      description="Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
