import { useEffect, useRef, useState } from "react";
import crown from "../assets/images/corona-icon.png";
import ring from "../assets/images/anillo-icon.png";
import cross from "../assets/images/cruz-icon.png";
import shoes from "../assets/images/zapatilla-icon.png";
import book from "../assets/images/biblia-icon.png";
import toy from "../assets/images/oso-icon.png";

import "../css/Padrinos.css";

export default function Padrinos() {

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
      className={`padrinos ${visible ? "show" : ""}`}
    >

      <h2 className="padrinos-title reveal delay1">
        Mis Padrinos
      </h2>

      <div className="padrinos-grid">

        <div className="padrino-card reveal delay2">
            <div className="icon">
                <img src={cross} alt="anillo-icon" />
            </div>
            <h3>Padrinos de Velación</h3>
            <p>Nombre & Nombre</p>
        </div>

        <div className="padrino-card reveal delay3">
            <div className="icon">
                <img src={ring} alt="anillo-icon" />
            </div>
            <h3>Padrinos de Anillo</h3>
            <p>Nombre & Nombre</p>
        </div>

        <div className="padrino-card reveal delay4">
            <div className="icon">
                <img src={crown} alt="corona-icon" />
            </div>
            <h3>Padrinos de Corona</h3>
            <p>Nombre & Nombre</p>
        </div>

        <div className="padrino-card reveal delay6">
            <div className="icon">
                <img src={book} alt="biblia-icon" />
            </div>
            <h3>Biblia y Rosario</h3>
            <p>Nombre & Nombre</p>
        </div>

        <div className="padrino-card reveal delay5">
            <div className="icon">
                <img src={shoes} alt="zapatillas-icon" />
            </div>
            <h3>Padrinos de Zapatos</h3>
            <p>Nombre & Nombre</p>
        </div>

        <div className="padrino-card reveal delay7">
            <div className="icon">
                <img src={toy} alt="oso-icon" />
            </div>
            <h3>Último Juguete</h3>
            <p>Nombre & Nombre</p>
        </div>

      </div>

    </section>
  );
}