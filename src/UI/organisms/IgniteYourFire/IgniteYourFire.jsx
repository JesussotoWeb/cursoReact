import Button from "../../atoms/Button/Button";
import styles from "./IgniteYourFire.module.css";

const IgniteYourFire = () => {
  return (
    <div className={styles.IgniteYourFire}>
      <div className={styles.IgniteYourFire__colum}>
        <div className={styles.IgniteYourFire__row}>
          <Button callback={() => location.pathname = "/learn-more"} text='Learn More' customClass={styles.IgniteYourFire__btn} />
          <Button callback={() => location.pathname = "/shop-now"} text='Shop Now' customClass={`${styles.IgniteYourFire__btn} ${styles.IgniteYourFire__btn2}`} />
        </div>
      </div>
      <div className={styles.IgniteYourFire__colum}></div>
    </div>
  )
}

export default IgniteYourFire;