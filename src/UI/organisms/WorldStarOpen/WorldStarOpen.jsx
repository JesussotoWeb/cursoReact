import SectionCards from '../../melecules/SectionCards/SectionCards';
import TextBoxesWorldStarOpen from '../../melecules/TextBoxesWorldStarOpen/TextBoxesWorldStarOpen';
import styles from './WorldStarOpen.module.css';

const WorldStarOpen = () => {
  return (
    <div className={styles.WorldStarOpen}>
        <TextBoxesWorldStarOpen />
        <SectionCards />
    </div>
  )
}

export default WorldStarOpen;