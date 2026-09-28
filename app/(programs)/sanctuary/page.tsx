import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Sanctuary | Magic Marble Foundation",
  description:
    "Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom.",
};

export default function SanctuaryPage() {
  return (
    <ContentPage
      badge="Programs"
      title="Sanctuary"
      subtitle="Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom."
      image="/carrousel/image01.webp"
      details={[
        {
          heading: "Michigan Haven",
          text: "Expansive green acreage providing safety, peaceful retirement, and continuous care for special-needs rescues.",
        },
        {
          heading: "Costa Rica Sanctuary",
          text: "A tropical biodiversity preserve where rescued animals roam freely with dedicated veterinary supervision.",
        },
        {
          heading: "Lifelong Commitment",
          text: "Every resident receives unconditional care, love, high-grade nutrition, and companionship for the rest of their lives.",
        },
      ]}
    >
      <p>
        For animals that cannot be safely released or adopted due to trauma or special medical requirements, our sanctuaries offer a peaceful and protected home where they can simply live and thrive.
      </p>
    </ContentPage>
  );
}
