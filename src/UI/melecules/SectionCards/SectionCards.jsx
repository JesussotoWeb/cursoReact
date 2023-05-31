import Card from '../../atoms/Card/Card';
import styles from './SectionCards.module.css';

const SectionCards = () => {
  return (
    <div className={styles.SectionCards}>
      <Card title="¿POR QUÉ?" description="El Bodybuilding ya contaba con espacios para su desarrollo de manera tradicional, pero no disponía de una Plataforma Innovadora como WORLD STARS OPEN para Satisfacer las Necesidades de los Verdaderos Protagonistas en la Era Actual." />

      <Card title="¿CÓMO?" description="Ponemos las Actividades, Mecanismos, Eventos y  Herramientas necesarias para el Crecimiento Integral de los Deportistas, Atletas y Fitness Models, a su entera disposición." />

      <Card title="PROYECCIÓN" description="Nuestros Participantes serán reconocidos a nivel internacional, no solamente por sus admirables físicos, sino también por sus habilidades, cualidades y calidades que les ayudaremos a perfeccionar." />
    </div>
  )
}

export default SectionCards;