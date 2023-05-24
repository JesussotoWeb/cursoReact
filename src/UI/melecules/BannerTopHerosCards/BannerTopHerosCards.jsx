import Card from "../../atoms/Card/Card";
import Input from "../../atoms/Input/Input";
import Title from "../../atoms/Title/Title";
import styles from "./BannerTopHerosCards.module.css";
import { useState } from "react";

const BannerTopHerosCards = () => {
  const [datosForm, setDatosForm] = useState({
    Nombre: "",
    Clave: "",
  });
  const [showData, setShowData] = useState(false);
  const dataCards = [
    {
      title: "¿POR QUÉ?",
      description:
        "El Bodybuilding ya contaba con espacios para su desarrollo de manera tradicional, pero no disponía de una Plataforma Innovadora como WORLD STARS OPEN para Satisfacer las Necesidades de los Verdaderos Protagonistas en la Era Actual.",
    },
    {
      title: "¿CÓMO?",
      description:
        "Ponemos las Actividades, Mecanismos, Eventos y  Herramientas necesarias para el Crecimiento Integral de los Deportistas, Atletas y Fitness Models, a su entera disposición.",
    },
    {
      title: "PROYECCIÓN",
      description:
        "Nuestros Participantes serán reconocidos a nivel internacional, no solamente por sus admirables físicos, sino también por sus habilidades, cualidades y calidades que les ayudaremos a perfeccionar.",
    },
  ];

 /*  const div = document.querySelector('.container');
  div.addEventlistener('click', () => {
    
  }) */
  const sendForm = (event) => {
    event.preventDefault();
    setShowData(true);
    console.log(datosForm);
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    setShowData(false)
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };
  return (
    <div className={styles.BannerCards}>
      <form onSubmit={(event) => sendForm(event)} className={styles.form}>
        <Title callback={() => {alert('aa')}} text="LogIn" edad={25} customClass={styles.BannerCards__title} />
        <div onClick={() => {alert('aa')}}>xxx</div>
        <Input
          value={datosForm.Nombre}
          name="Nombre"
          labelText="Primer Nombre"
          type="text"
          idName="PrimerNombre"
          callback={(e) => inputChange(e)}
        />
        <Input
          callback={(e) => inputChange(e)}
          value={datosForm.Clave}
          name="Clave"
          type="password"
          customPlaceholder="****"
        />
        <Input type="submit" value="Send" />
        {showData ? (
          <ul>
            <li>Nombre: {datosForm.Nombre}</li>
            <li>Clave: {datosForm.Clave}</li>
          </ul>
        ) : (
          <ul>
            <li>Esperando que Envie los datos</li>
          </ul>
        )}
      </form>

      {dataCards.map((content, index) => {
        return (
          <div key={index}>
            <Card title={content.title} description={content.description} />
          </div>
        );
      })}
    </div>
  );
};

export default BannerTopHerosCards;
