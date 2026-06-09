import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";
import styles from "../styles/Invite.module.css";

export default function WhereWhenSection({ info }) {
  const hasMap = Boolean(info.party.mapUrl);

  return (
    <section className={styles.section}>
      <div className={styles.whereCard}>
        <div className={styles.sectionIconRow}>
          <span className={`${styles.sectionDecorIcon} ${styles.iconGrapes}`}>
            <GiGrapes />
          </span>
        </div>

        <p className={styles.sectionOverline}>Celebremos juntos</p>
        <h2>{info.party.title}</h2>
        <p className={styles.partySubtitle}>{info.party.subtitle}</p>

        <div className={styles.infoBlock}>
          <span className={styles.infoIcon}>
            <FaRegClock />
          </span>
          <div>
            <strong>Hora</strong>
            <p>{info.timeText}</p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <span className={styles.infoIcon}>
            <FaMapMarkerAlt />
          </span>
          <div>
            <strong>{info.party.placeName}</strong>
            <p>{info.party.address}</p>
          </div>
        </div>

        {hasMap ? (
          <a
            className={styles.mapButton}
            href={info.party.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            {info.party.buttonText}
          </a>
        ) : (
          <button className={styles.mapButtonDisabled} disabled>
            Ubicación pendiente
          </button>
        )}
      </div>
    </section>
  );
}