import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Relief | Magic Marble Foundation",
  description:
    "Rapid disaster and crisis response delivering food, medical supplies, and veterinary aid to affected communities.",
};

export default function ReliefPage() {
  return (
    <ContentPage
      title="Relief"
      description="Rapid disaster and crisis response delivering food, medical supplies, and veterinary aid to affected communities."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
