import OurWork from "@/components/OurWork/OurWork";
import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel/Carrousel";
import OurMission from "@/components/OurMission/OurMission";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <Carrousel />
          <OurWork />
          <OurMission />
        </div>
      </main>
    </div>
  );
}
