import BtnProximoEvento from '../../melecules/BtnProximoEvento/BtnProximoEvento';
import CounterProximoEvento from '../../melecules/CounterProximoEvento/CounterProximoEvento';
import styles from './ProximoEvento.module.css';

const ProximoEvento = () => {
  return (
    <div className={styles.ProximoEvento}>
      <BtnProximoEvento />
      <CounterProximoEvento />
    </div>
  )
}

export default ProximoEvento;