import { useState } from "react";
import "../css/galeria.css";

import img1 from "../assets/images/galeria1.png";
import img2 from "../assets/images/galeria2.png";
import img3 from "../assets/images/galeria3.png";
import img4 from "../assets/images/galeria5.png";
import img5 from "../assets/images/galeria6.png";
import img6 from "../assets/images/galeria7.png";

const imagenes = [img1, img2, img3, img4, img5, img6];

function Galeria() {

  const [index, setIndex] = useState(0);

  return (
    <section className="galeria">

      <h2 className="titulo-galeria">Galería</h2>

      <div className="galeria-layout">

        {/* imagen principal */}

        <div className="imagen-principal">
          <img src={imagenes[index]} alt="foto xv" />
        </div>

        {/* miniaturas */}

        <div className="miniaturas">
          {imagenes.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="miniatura"
              className={i === index ? "mini activa" : "mini"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Galeria;