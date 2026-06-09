import styles from "../styles/Invite.module.css";

export default function IntroScreen({ onEnter }) {
  return (
    <section className={styles.introScreen}>
      <div className={styles.introGlow}></div>

      <div className={styles.introCard}>
        <div className={styles.crossIcon}>✝</div>
        <p className={styles.introSmall}>Estás invitado a celebrar</p>
        <h1 className={styles.introTitle}>Mi Primera Comunión y Confirmación </h1>
        <p className={styles.introName}>Ángel Gabriel</p>

        <button className={styles.enterButton} onClick={onEnter}>
          Abrir invitación
        </button>
      </div>
    </section>
  );
}