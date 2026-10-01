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
      title="CNVR"
      description="Catch · Neuter · Vaccinate · Return — our humane approach to managing and protecting street animal populations."
      imageURL="/carrousel/image01.webp"
    >
      <p>Content</p>
    </ContentPage>
  );
}
