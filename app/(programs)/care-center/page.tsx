import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Care Center Nepal | Magic Marble Foundation",
  description:
    "A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter.",
};

export default function CareCenterPage() {
  return (
    <ContentPage
      badge="Programs"
      title="Care Center Nepal"
      subtitle="A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter."
      image="/carrousel/image02.webp"
      details={[
        {
          heading: "Full-Service Clinic",
          text: "Equipped with state-of-the-art diagnostic, surgical, and therapeutic veterinary equipment in Kathmandu.",
        },
        {
          heading: "Rehabilitation Suites",
          text: "Dedicated recovery zones for animals recovering from trauma, orthopedic surgery, and chronic illnesses.",
        },
        {
          heading: "Local Capacity Building",
          text: "Training local veterinary technicians and partnering with surrounding neighborhoods to elevate care standards.",
        },
      ]}
    >
      <p>
        The Care Center in Nepal serves as a beacon of hope for injured and sick animals throughout Kathmandu Valley, offering world-class care free of charge to community animals in need.
      </p>
    </ContentPage>
  );
}
