import { useState } from "react";
import "../css/rsvp.css";

import {
  FaCheckCircle,
  FaTimesCircle,
  FaWhatsapp,
  FaWpforms,
  FaUndo
} from "react-icons/fa";

function RSVP(){

  const [estado, setEstado] = useState("");

  const telefono = "5210000000000";

  const whatsappConfirmar = `https://wa.me/${telefono}?text=Hola,%20confirmo%20mi%20asistencia%20a%20los%20XV`;
  const whatsappMensaje = `https://wa.me/${telefono}?text=Hola,%20aunque%20no%20podré%20asistir,%20quiero%20desearte%20unos%20XV%20maravillosos`;

  const googleForm = "https://forms.gle/XXXXXXXX";

  return(

    <section className="rsvp">

      <h2 className="titulo-rsvp">
        ¿Podrás acompañarme?
      </h2>

      <p className="texto-rsvp">
        Me encantará celebrar contigo este momento tan especial.
      </p>

      {/* BOTONES INICIALES */}

      {estado === "" && (

        <div className="botones-rsvp">

          <button
            className="btn asistir"
            onClick={() => setEstado("si")}
          >
            <FaCheckCircle className="icono"/>
            Sí puedo asistir
          </button>

          <button
            className="btn no-asistir"
            onClick={() => setEstado("no")}
          >
            <FaTimesCircle className="icono"/>
            No puedo asistir
          </button>

        </div>

      )}

      {/* SI CONFIRMA */}

      {estado === "si" && (

        <div className="confirmacion">

          <p className="mensaje">
            ¡Qué alegría! Puedes confirmar tu asistencia aquí:
          </p>

          <div className="botones-rsvp">

            <a
              href={googleForm}
              target="_blank"
              className="btn forms"
            >
              <FaWpforms className="icono"/>
              Google Forms
            </a>

            <a
              href={whatsappConfirmar}
              target="_blank"
              className="btn whatsapp"
            >
              <FaWhatsapp className="icono"/>
              Confirmar por WhatsApp
            </a>

          </div>

          <button
            className="btn volver"
            onClick={() => setEstado("")}
          >
            <FaUndo className="icono"/>
            Cambiar respuesta
          </button>

        </div>

      )}

      {/* SI NO PUEDE */}

      {estado === "no" && (

        <div className="confirmacion">

          <p className="mensaje-gracias">
            Gracias por tomarte el tiempo de responder.
            Aunque no puedas acompañarme, me encantaría
            recibir un bonito mensaje tuyo.
          </p>

          <a
            href={whatsappMensaje}
            target="_blank"
            className="btn whatsapp"
          >
            <FaWhatsapp className="icono"/>
            Enviar mensaje a la quinceañera
          </a>

          <button
            className="btn volver"
            onClick={() => setEstado("")}
          >
            <FaUndo className="icono"/>
            Cambiar respuesta
          </button>

        </div>

      )}

    </section>

  );
}

export default RSVP;