import { useEffect, useState } from "react";
import { GiGrapes } from "react-icons/gi";
import { getCountdown } from "../utils/utilsInvite";
import styles from "../styles/Invite.module.css";

export default function HeroSection({ info }) {
  const [countdown, setCountdown] = useState(getCountdown(info.countdownDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(info.countdownDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [info.countdownDate]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOrnamentTop}>✦</div>

      <div className={styles.heroCard}>
        <div className={styles.doveRow}>
          <span className={`${styles.heroMiniIcon} ${styles.iconGrapes}`}>
            <GiGrapes />
          </span>
        </div>

        <p className={styles.heroLabel}>Te invitamos a celebrar</p>
        <h1 className={styles.heroTitle}>{info.eventType}</h1>

        <div className={styles.nameWrapper}>
          <p className={styles.heroName}>{info.name}</p>
        </div>

        <div className={styles.decorativeLine}>
          <span></span>
          <b>✝</b>
          <span></span>
        </div>

        <p className={styles.heroDate}>{info.dateText}</p>
        <p className={styles.heroTime}>{info.timeText}</p>

        <div className={styles.heroCountdownWrap}>
          <div className={styles.decorativeLineSmall}>
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p className={styles.countdownTitleHero}>Faltan</p>

          <div className={styles.countdownGridHero}>
            <div className={styles.timeBox}>
              <strong>{countdown.days}</strong>
              <span>Días</span>
            </div>

            <div className={styles.timeBox}>
              <strong>{countdown.hours}</strong>
              <span>Horas</span>
            </div>

            <div className={styles.timeBox}>
              <strong>{countdown.minutes}</strong>
              <span>Minutos</span>
            </div>

            <div className={styles.timeBox}>
              <strong>{countdown.seconds}</strong>
              <span>Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}