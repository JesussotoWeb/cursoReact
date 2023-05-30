import { useEffect, useState } from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({ text, customClass }) => {
  const [textData, setTextData] = useState(text)
  const [innerHtml, setInnerHtml] = useState(false)

  const tag1 = textData.includes("<p>")
  const tag2 = textData.includes("</p>")

  useEffect(() => {
    if(tag1 && tag2)
    {
      setInnerHtml(true);
    }
  }, [])
  
  


  return (
    <span>
    {
      innerHtml ? <p className={`${styles.Paragraph} ${customClass}`} dangerouslySetInnerHTML={{__html:textData}}></p>: <p className={`${styles.Paragraph} ${customClass}`} >{textData}</p>
    }
    </span>
    
    
   
  )
    
};

export default Paragraph;
