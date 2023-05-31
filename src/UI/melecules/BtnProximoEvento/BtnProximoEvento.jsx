import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import styles from './BtnProximoEvento.module.css';

const BtnProximoEvento = () => {
  return (
    <div className={styles.BtnProximoEvento}>
        <Title customClass={styles.BtnProximoEvento__title} text="Proximo Evento" />
        <Button customClass={styles.BtnProximoEvento__btn} innerHTML={true} text="World Stars Open México<br>  LA CONQUISTA <br>  Octubre 14 de 2023" />
    </div>
  )
}

export default BtnProximoEvento;