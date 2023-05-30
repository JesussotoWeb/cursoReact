import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import styles from "./Card.module.css";

const Card = ({
  title,
  description,
  img,
  config = { btn: false, border: false },
  btnText,
  callbackBtn,
}) => {
  console.log(config);
  return (
    <div
      className={`${styles.Card} ${config.border ? styles.Card_border : ""}`}>
      <Title text={title} />
      <Paragraph text={description} />
      {config.btn ? <Button callback={callbackBtn} pathBtn text={btnText} /> : ""}
    </div>
  );
};

export default Card;
