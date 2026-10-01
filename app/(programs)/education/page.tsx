import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Education | Magic Marble Foundation",
  description:
    "Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness.",
};

export default function EducationPage() {
  return (
    <ContentPage
      title="Education"
      description="Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
