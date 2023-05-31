import { useEffect, useState } from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Title from '../../atoms/Title/Title';
import styles from './CounterProximoEvento.module.css';

const CounterProximoEvento = () => {
    const [counter, setCounter] = useState(0)
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    }, [])
    
  return (
    <div className={styles.CounterProximoEvento}>
        <div className={styles.CounterProximoEvento__segundosContainer}>
            <Title text={counter} />
            <Paragraph text="Segundos" />
        </div>
    </div>
  )
}

export default CounterProximoEvento;