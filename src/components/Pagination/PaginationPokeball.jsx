import styles from "./Pokeball.module.css";

export default function PaginationPokeball(props) {
  return (
    <div className={styles.ball} {...props}>
      <div className={styles.ballCenterLine}>
        <div className={styles.ballCenter}>{props.children}</div>
      </div>
    </div>
  );
}
