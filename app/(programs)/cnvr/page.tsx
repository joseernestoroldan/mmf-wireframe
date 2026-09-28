import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";

export const metadata: Metadata = {
  title: "CNVR | Magic Marble Foundation",
  description:
    "Catch · Neuter · Vaccinate · Return — our humane approach to managing and protecting street animal populations.",
};

export default function CNVRPage() {
  return (
    <ContentPage
      badge="Programs"
      title="CNVR"
      subtitle="Catch · Neuter · Vaccinate · Return — our humane approach to managing and protecting street animal populations."
      image="/carrousel/image05.webp"
      details={[
        {
          heading: "Catch & Transport",
          text: "Humane capture and safe transportation of community animals with low-stress handling techniques.",
        },
        {
          heading: "Neuter & Vaccinate",
          text: "High-volume spay/neuter surgeries and essential rabies and core vaccinations administered by experienced vets.",
        },
        {
          heading: "Return & Monitor",
          text: "Returning recovered animals to their familiar community territories with ongoing health monitoring.",
        },
      ]}
    >
      <p>
        CNVR is proven worldwide to be the most humane and effective method for stabilizing and reducing street animal populations while eliminating the threat of rabies in local communities.
      </p>
    </ContentPage>
  );
}
