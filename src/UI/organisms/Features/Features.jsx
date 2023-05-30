import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.Features}>
        <div className={styles.Features__feature}>Participa</div>
        <div className={styles.Features__feature}>Evalua</div>
        <div className={styles.Features__feature}>Crece</div>
    </div>
  )
}

export default Features