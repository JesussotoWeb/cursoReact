import BannerDivisiones from "../../melecules/BannerDivisiones/BannerDivisiones";
import BannerTopHerosCards from "../../melecules/BannerTopHerosCards/BannerTopHerosCards";
import BannerTopHerosTextBoxes from "../../melecules/BannerTopHerosTextBoxes/BannerTopHerosTextBoxes";
import styles from "./BannerTopHeros.module.css";

const BannerTopHeros = () => {
  return (
    <div className={styles.BannerTopHeros}>
      <BannerTopHerosTextBoxes />
      <BannerTopHerosCards />
      <BannerDivisiones />
    </div>
  )
}

export default BannerTopHeros;