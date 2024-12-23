import styles from "./page.module.css";
import someStyle from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={someStyle.card}>
        <h1 className={someStyle.a}>hello</h1>
        <p className={someStyle.img}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          suscipit.
        </p>
        <a href="/profile">Go To Profile</a>
      </div>
    </div>
  );
}
