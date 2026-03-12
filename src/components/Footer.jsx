import "../css/footer.css";
import { FaWhatsapp } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-contenido">

        <p className="mensaje-final">
          Gracias por ser parte de este momento tan especial.
        </p>

        <h3 className="nombre-xv">
          Fernanda
        </h3>

        <div className="decoracion"></div>

      </div>

      <div className="footer-creditos">

        <a
          href="https://invitacioneslimon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sitio"
        >
          invitacioneslimon.com
        </a>

        <a
          href="https://wa.me/525646015811"
          target="_blank"
          rel="noopener noreferrer"
          className="link-whatsapp"
        >
          <FaWhatsapp />
        </a>

      </div>

    </footer>

  );

}

export default Footer;