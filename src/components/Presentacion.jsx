import { useEffect, useRef, useState } from "react";
import princess from "../assets/images/princess.png";
import "../css/Presentacion.css";

export default function Presentacion() {

  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);

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

  /* PARALLAX REAL */

  useEffect(() => {

    const handleScroll = () => {

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {

        const progress = rect.top / windowHeight;

        setOffset(progress * -60);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <section
      ref={sectionRef}
      className={`presentacion ${visible ? "show" : ""}`}
    >

      <div className="presentacion-container">

        {/* FOTO */}

        <div
          className="foto-wrapper reveal delay1"
          style={{ transform: `translateY(${offset}px)` }}
        >

          <div className="foto-frame">
            <img src={princess} alt="Quinceañera" />
          </div>

        </div>


        {/* TEXTO */}
        <div className="texto-presentacion">

          <h2 className="reveal delay2">
            Con la bendición de Dios
          </h2>

          <div className="decor-line reveal delay3"></div>

          <p className="mensaje reveal delay4">
            Hay momentos en la vida que se convierten en recuerdos eternos.
            Hoy comienzo una nueva etapa llena de sueños e ilusiones
            y me encantaría compartirla contigo.
          </p>

          <p className="mensaje reveal delay5">
            Con mucha ilusión en mi corazón
            deseo compartir contigo uno de los días más importantes de mi vida.
            Tu presencia hará que este momento sea aún más especial para mí.
          </p>

          <div className="padres reveal delay6">

            <p className="titulo">Mis queridos padres</p>

            <div className="padres-nombres">

              <p className="nombres">Alejandra Rodríguez</p>

              <div className="ampersand">&</div>

              <p className="nombres">Oswaldo Hernández</p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}