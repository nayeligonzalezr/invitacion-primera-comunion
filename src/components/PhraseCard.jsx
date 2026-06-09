import styles from "../styles/Invite.module.css";
import { PiCrossLight } from "react-icons/pi";

export default function PhraseCard({ phrase }) {
  return (
    <section className={styles.section}>
      <div className={styles.phraseCard}>
        <div className={styles.doveRow}>
                  <span className={`${styles.smallCross} ${styles.iconCross}`}>
                    <PiCrossLight />
                  </span>
                </div>

        <p className={styles.verse}>{phrase.verse}</p>
        <p className={styles.reference}>{phrase.reference}</p>

        <div className={styles.softDivider}></div>

        <p className={styles.phraseMessage}>{phrase.message}</p>
      </div>
    </section>
  );
}