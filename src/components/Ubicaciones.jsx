import { useEffect, useRef, useState } from "react";
import "../css/Ubicaciones.css";

import iglesia from "../assets/images/iglesia.jpg";
import salon from "../assets/images/salon.jpg";

import { FaChurch } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";

export default function Ubicaciones() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <section
      ref={sectionRef}
      className={`ubicaciones ${visible ? "show" : ""}`}
    >

      <div className="ubicaciones-overlay">

        <div className="ubicaciones-card">

          {/* TITULO SECCION */}

          <h2 className="ubicaciones-title reveal delay1">
            Cuándo y Dónde
          </h2>


          {/* CEREMONIA */}

          <div className="ubicacion-col">

            <h3 className="reveal delay2">
              Ceremonia
            </h3>

            <div className="ubicacion-img reveal delay3">
              <img src={iglesia} alt="Iglesia" />
            </div>

            <p className="lugar reveal delay4">
              Parroquia de San Lorenzo Mártir de Tetlixtac
            </p>

            <p className="hora reveal delay5">
              11:00 AM
            </p>

            <a
              className="mapa-btn reveal delay6"
              href="https://maps.google.com/?q=Parroquia+de+San+Lorenzo+Martir+de+Tetlixtac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChurch />
              Ver ubicación
            </a>

          </div>


          {/* RECEPCION */}

          <div className="ubicacion-col">

            <h3 className="reveal delay2">
              Recepción
            </h3>

            <div className="ubicacion-img reveal delay3">
              <img src={salon} alt="Salón" />
            </div>

            <p className="lugar reveal delay4">
              Salón Excess
            </p>

            <p className="hora reveal delay5">
              2:00 PM
            </p>

            <a
              className="mapa-btn reveal delay6"
              href="https://maps.google.com/?q=Salon+Excess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChampagneGlasses />
              Ver ubicación
            </a>

          </div>

        </div>

      </div>

    </section>

  );

}