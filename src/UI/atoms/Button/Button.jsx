import styles from "./Button.module.css";

const Button = ({ text, customClass, callback, innerHTML = false }) => {
  return innerHTML ? (
    <button onClick={callback} className={`${styles.Button} ${customClass}`} dangerouslySetInnerHTML={{__html: text}}></button>
  ) : (
    <button onClick={callback} className={`${styles.Button} ${customClass}`}>
      {text}
    </button>
  );
};

export default Button;
