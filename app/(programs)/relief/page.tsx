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
      badge="Programs"
      title="Relief"
      subtitle="Rapid disaster and crisis response delivering food, medical supplies, and veterinary aid to affected communities."
      image="/carrousel/image04.webp"
      details={[
        {
          heading: "Disaster Deployment",
          text: "Mobilizing mobile clinics and supply convoys to disaster zones, floods, fires, and conflict regions.",
        },
        {
          heading: "Emergency Rations & Medicine",
          text: "Distributing thousands of pounds of emergency food, clean water, and critical medications.",
        },
        {
          heading: "Community Recovery",
          text: "Partnering with local caretakers and rescue volunteers to rebuild animal shelters and feeding stations.",
        },
      ]}
    >
      <p>
        In times of disaster, animals are often the most vulnerable victims. Our relief efforts ensure that emergency aid reaches them quickly and effectively when normal infrastructure collapses.
      </p>
    </ContentPage>
  );
}
