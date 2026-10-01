import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Who We Are | Magic Marble Foundation",
  description:
    "Meet the passionate team behind our worldwide operations.",
};

export default function WhoWeArePage() {
  return (
    <ContentPage
      title="Who We Are"
      description="Meet the passionate team behind our worldwide operations."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>

  );
}
