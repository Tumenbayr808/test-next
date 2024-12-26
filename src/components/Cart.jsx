import styles from "./card.module.css";

export const Cart = (props) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt="" />
    </div>
  );
};
