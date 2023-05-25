import BannerDivisiones from "../../melecules/BannerDivisiones/BannerDivisiones";
import BannerTopHerosCards from "../../melecules/BannerTopHerosCards/BannerTopHerosCards";
import BannerTopHerosTextBoxes from "../../melecules/BannerTopHerosTextBoxes/BannerTopHerosTextBoxes";
import styles from "./BannerTopHeros.module.css";

const BannerTopHeros = ({stateHome}) => {
  return (
    <div className={styles.BannerTopHeros}>
      <BannerTopHerosTextBoxes />
      <BannerTopHerosCards stateHome={stateHome} />
      <BannerDivisiones />
    </div>
  )
}

export default BannerTopHeros;