import OurWork from "@/components/OurWork/OurWork";
import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel/Carrousel";
import OurMission from "@/components/OurMission/OurMission";
import Donation from "@/components/Donation/Donation";
import ImpactDiagram from "@/components/ImpactDiagram/ImpactDiagram";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <Carrousel />
          <OurWork />
          <OurMission />
          <ImpactDiagram/>
          <Donation />
        </div>
      </main>
    </div>
  );
}
