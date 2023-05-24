import styles from "./Input.module.css";

const Input = ({ type, idName, labelText, customPlaceholder, value, name, callback }) => {
  return (
    <>
      {labelText ? (
        <>
          <label className={styles.label} htmlFor={idName}>
            {labelText}
          </label>
          <input onChange={callback} defaultValue={value} name={name} className={styles.input} type={type} id={idName} />
        </>
      ) : (
        <input
          onChange={callback}
          name={name}
          className={`${styles.input} ${type == "submit" ? styles.submit : ""}`}
          placeholder={customPlaceholder}
          type={type}
          id={idName}
          defaultValue={value}
        />
      )}
    </>
  );
};

export default Input;
