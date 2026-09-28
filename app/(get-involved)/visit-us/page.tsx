import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Visit Us | Magic Marble Foundation",
  description:
    "Come see our sanctuaries and meet the animals whose lives have been transformed by your support.",
};

export default function VisitUsPage() {
  return (
    <ContentPage
      badge="Get Involved"
      title="Visit Us"
      subtitle="Come see our sanctuaries and meet the animals whose lives have been transformed by your support."
      image="/carrousel/image04.webp"
      details={[
        {
          heading: "Guided Sanctuary Tours",
          text: "Experience inspiring tours of our Michigan and Costa Rica sanctuaries led by our passionate caretakers.",
        },
        {
          heading: "Educational Visits",
          text: "Group tours and school excursions designed to provide hands-on understanding of wildlife and rescue rehabilitation.",
        },
        {
          heading: "Visitor Guidelines",
          text: "All visits are arranged by appointment to ensure the safety, peace, and routine of our animal residents.",
        },
      ]}
    >
      <p>
        Witnessing firsthand the freedom and joy of rescued animals is an unforgettable experience. Plan your visit to meet the resilient animals and learn about our ongoing conservation and care efforts.
      </p>
    </ContentPage>
  );
}
