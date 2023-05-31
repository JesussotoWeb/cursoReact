import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';
import styles from './TextBoxesWorldStarOpen.module.css';

const TextBoxesWorldStarOpen = () => {
  return (
    <div className={styles.TextBoxesWorldStarOpen}>
        <Title customClass={styles.TextBoxesWorldStarOpen__title} text="WORLD STARS OPEN" />
        <Paragraph customClass={styles.TextBoxesWorldStarOpen__paragraph} text="Hemos llegado para Profesionalizar el Bodybuilding & Fitness Model." />
        <Paragraph customClass={styles.TextBoxesWorldStarOpen__paragraph} text="Somos la Plataforma #1 en Promoción de los Actores de Nuestra Industria con alcance internacional." />
    </div>
  )
}

export default TextBoxesWorldStarOpen;