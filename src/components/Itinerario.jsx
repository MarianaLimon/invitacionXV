import "../css/Itinerario.css";

export default function Itinerario(){

  return(

    <section className="itinerario">

      <h2 className="itinerario-title">Itinerario</h2>

      <div className="timeline">

        {/* CEREMONIA */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <lord-icon
              src="https://cdn.lordicon.com/rlngnytn.json"
              trigger="loop"
              delay="2000"
              colors="primary:#8f2d52,secondary:#c9a75c"
              style={{width:"100px",height:"100px"}}
            />
          </div>

          <div className="timeline-content">
            <h3>Ceremonia religiosa</h3>
            <p>11:00 Hrs</p>
          </div>
        </div>

        {/* RECEPCIÓN */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <lord-icon
              src="https://cdn.lordicon.com/wxnxiano.json"
              trigger="loop"
              delay="2000"
              colors="primary:#8f2d52,secondary:#c9a75c"
              style={{width:"100px",height:"100px"}}
            />
          </div>
          <div className="timeline-content">
            <h3>Recepción</h3>
            <p>14:00 Hrs</p>
          </div>
        </div>

        {/* CENA */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <lord-icon
              src="https://cdn.lordicon.com/txqkxliv.json"
              trigger="loop"
              delay="2000"
              colors="primary:#8f2d52,secondary:#c9a75c"
              style={{width:"100px",height:"100px"}}
            />
          </div>

          <div className="timeline-content">
            <h3>Cena</h3>
            <p>19:00 Hrs</p>
          </div>
        </div>

        {/* FIESTA */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <lord-icon
              src="https://cdn.lordicon.com/dlnpcmpd.json"
              trigger="loop"
              delay="2000"
              colors="primary:#8f2d52,secondary:#c9a75c"
              style={{width:"100px",height:"100px"}}
            />
          </div>
          <div className="timeline-content">
            <h3>Fiesta</h3>
            <p>20:00 - 02:00 Hrs</p>
          </div>
        </div>
      </div>

    </section>

  )

}