import styles from "./Title.module.css";

const Title = ({text, customClass, callback}) => {
  return <h1 onClick={callback} className={`${styles.title} ${customClass}`}>{text}</h1>;
};

export default Title;
