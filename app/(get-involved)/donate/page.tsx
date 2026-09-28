import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Donate | Magic Marble Foundation",
  description:
    "Your contribution directly funds rescues, medical care, and food for animals in need.",
};

export default function DonatePage() {
  return (
    <ContentPage
      badge="Get Involved"
      title="Donate"
      subtitle="Your contribution directly funds rescues, medical care, and food for animals in need."
      image="/carrousel/image02.webp"
      details={[
        {
          heading: "Monthly Lifesaver Club",
          text: "Recurring monthly contributions provide predictable, reliable funding for daily feeding, medicines, and rescue operations.",
        },
        {
          heading: "One-Time Emergency Gift",
          text: "Directly subsidize emergency surgeries, trauma treatments, and rapid disaster relief supplies.",
        },
        {
          heading: "Sponsor a Sanctuary Resident",
          text: "Support a specific rescue animal with lifelong medical care, special nutrition, and shelter.",
        },
      ]}
    >
      <p>
        Every single dollar has an immediate and tangible impact. Because of supporters like you, injured animals receive life-saving surgeries, hungry strays get nourishing meals, and traumatized souls find peaceful forever sanctuary.
      </p>
    </ContentPage>
  );
}
