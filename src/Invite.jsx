import { useRef, useState } from "react";
import { FaWineGlassAlt } from "react-icons/fa";
import IntroScreen from "./components/IntroScreen";
import HeroSection from "./components/HeroSection";
import PhraseCard from "./components/PhraseCard";
import WhereWhenSection from "./components/WhereWhenSection";
import { invitationInfo } from "./config/info";
import styles from "./styles/Invite.module.css";

export default function Invite() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = async () => {
    setOpened(true);

    setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 300);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  if (!opened) {
    return <IntroScreen onEnter={handleEnter} />;
  }

  return (
    <main className={styles.page}>
      <audio ref={audioRef} loop>
        <source src="/audio/music.mp3" type="audio/mpeg" />
      </audio>

      <button className={styles.musicButton} onClick={toggleMusic}>
        ♫
      </button>

      <div className={styles.invitationShell}>
        <HeroSection info={invitationInfo} />

        <PhraseCard phrase={invitationInfo.phrase} />

        <section className={styles.section}>
          <div className={styles.familyCard}>
            <div className={styles.sectionIconRow}>
              <span className={`${styles.sectionDecorIcon} ${styles.iconCup}`}>
                <FaWineGlassAlt />
              </span>
            </div>

            <p className={styles.sectionOverline}>Con la bendición de Dios</p>

            <div className={styles.namesGroup}>
              <h2>{invitationInfo.parents.title}</h2>
              {invitationInfo.parents.names.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>

            <div className={styles.familyDivider}>✝</div>

            <div className={styles.namesGroup}>
              <h2>{invitationInfo.communionGodparents.title}</h2>
              {invitationInfo.communionGodparents.names.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>

            <div className={styles.familyDivider}>✦</div>

            <div className={styles.namesGroup}>
              <h2>{invitationInfo.confirmation.sponsorTitle}</h2>
              <p>{invitationInfo.confirmation.sponsor}</p>
            </div>
          </div>
        </section>

        <WhereWhenSection info={invitationInfo} />

        <footer className={styles.footer}>
          <p>Gracias por acompañarnos en este día tan especial</p>
          <p>Te Esperamos!</p>
        </footer>
      </div>
    </main>
  );
}