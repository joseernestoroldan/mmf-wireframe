import OurWork from "@/components/OurWork/OurWork";
import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel/Carrousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <Carrousel />
          <OurWork/>
        </div>
      </main>
    </div>
  );
}
