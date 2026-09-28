import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "Financials | Magic Marble Foundation",
  description:
    "Transparency in how every donation is used to save lives.",
};

export default function FinancialsPage() {
  return (
    <ContentPage
      badge="About Us"
      title="Financials"
      subtitle="Transparency in how every donation is used to save lives."
      image="/carrousel/image04.webp"
      details={[
        {
          heading: "Program Allocation",
          text: "Over 85% of every dollar goes directly into veterinary care, rescue operations, and sanctuary food & shelter.",
        },
        {
          heading: "Audited Accountability",
          text: "Annual independent financial audits ensure strict governance, regulatory compliance, and fiscal integrity.",
        },
        {
          heading: "Donor Confidence",
          text: "Complete transparency with publicly available reports, impact metrics, and open financial disclosures.",
        },
      ]}
    >
      <p>
        We treat every donation with utmost stewardship and accountability. Your generosity fuels life-saving care, and we are committed to complete financial transparency at every step.
      </p>
    </ContentPage>
  );
}
