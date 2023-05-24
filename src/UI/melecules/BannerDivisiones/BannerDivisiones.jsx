import Card from "../../atoms/Card/Card";
import styles from "./BannerDivisiones.module.css";

const BannerDivisiones = () => {
  const dataCardDiv = [
    {
      title: "MUSCLE QUEEN",
      description:
        "Enviado al olvido por años, hoy World Stars Open revive las emociones del Fisicoculturismo Femenino, tan amado por todos.<br> Las mujeres con más volumen muscular, definición y estética del mundo están aquí, en la Plataforma que  une Atletas de todo el mundo, para disfrutar de las emociones del Bodybuilding.",
      btnText: "Inscríbete",
      path: "/inscribete",
    },
    {
      title: "Contacto",
      description:
        "Estética, belleza y musculación son componentes clave en esta división femenina que los amantes del Fitness tanto disfrutan. Tendremos el gusto de ver en el escenario, los resultados del duro trabajo de estas chicas.Un show de esculturales cuerpos, con balance más que perfecto en escena.",
      btnText: "Contactanos",
      path: "/contactanos",
    },
    {
      title: "FITNESS DOLL",
      description:
        "Chicas con estructura osteo/articular delgada, caderas estrechas y huesos largos, lucen sus cuerpos hermosamente trabajados, en una estética combinación de musculación y esbeltez. Sus bikinis son un marco perfecto para sus físicos. Son las participantes más delgadas del circuito.",
      btnText: "Inscríbete",
      path: "/inscribete",
    },
  ];
  const link = (path) => {
    location.pathname = path;
  };
  return (
    <div className={styles.BannerDivisiones}>
      {dataCardDiv.map((content) => {
        return (
          <Card
            callbackBtn={() => link(content.path)}
            btnText={content.btnText}
            title={content.title}
            description={content.description}
            config={{ btn: true, border: true }}
          />
        );
      })}
    </div>
  );
};

export default BannerDivisiones;
