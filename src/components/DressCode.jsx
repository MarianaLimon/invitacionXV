import "../css/DressCode.css";
import dama from "../assets/images/dama.png";
import caballero from "../assets/images/caballero.png";

export default function DressCode(){

  return(
    <section className="dresscode">
      <h2 className="dresscode-title">
        Dress Code
      </h2>
      <div className="dresscode-grid">
        
        {/* MUJERES */}
        <div className="dresscode-card">
          <img src={dama} alt="dresscode-icon" />
          <h3>Mujeres</h3>
          <p>Vestido elegante</p>
          <div className="color-palette">
            <span style={{background:"#8f2d52"}}></span>
            <span style={{background:"#c9a75c"}}></span>
            <span style={{background:"#e1bbc6"}}></span>
          </div>
        </div>

        {/* HOMBRES */}
        <div className="dresscode-card">
          <img src={caballero} alt="dresscode-icon" />
          <h3>Hombres</h3>
          <p>Traje formal</p>
          <div className="color-palette">
            <span style={{background:"#8f2d52"}}></span>
            <span style={{background:"#c9a75c"}}></span>
            <span style={{background:"#444"}}></span>
          </div>
        </div>
      </div>
    </section>
  )
}