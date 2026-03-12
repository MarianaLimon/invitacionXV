import "../css/BotonWhatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function BotonWhatsapp(){

  const telefono = "525646015811";

  return (

    <a
      href={`https://wa.me/${telefono}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>

  );

}

export default BotonWhatsapp;