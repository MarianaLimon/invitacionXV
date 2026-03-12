import { useRef, useState, useEffect } from "react";
import "../css/Musica.css";
import { FaMusic, FaPause } from "react-icons/fa";
import music from "../assets/music/Music.mp3";

function Musica(){

  const audioRef = useRef(null);
  const autoActivado = useRef(false);

  const [sonando, setSonando] = useState(false);
  const [mostrarAviso, setMostrarAviso] = useState(false);

  useEffect(() => {

    const iniciarMusica = () => {

      if(audioRef.current && !autoActivado.current){

        audioRef.current.play().then(() => {

          setSonando(true);
          setMostrarAviso(true);

          setTimeout(() => {
            setMostrarAviso(false);
          }, 2500);

        }).catch(() => {});

        autoActivado.current = true;
      }

    };

    window.addEventListener("scroll", iniciarMusica);

    return () => {
      window.removeEventListener("scroll", iniciarMusica);
    };

  }, []);

  const toggleMusica = () => {

    if(!audioRef.current) return;

    if(sonando){
      audioRef.current.pause();
      setSonando(false);
    } else {
      audioRef.current.play();
      setSonando(true);
    }

  };

  return(

    <>
      <div className="musica-container">

        <audio
          ref={audioRef}
          loop
          src={music}
        />

        <button
          className={`btn-musica ${sonando ? "sonando" : ""}`}
          onClick={toggleMusica}
        >
          <span className="icono-musica">
            {sonando ? <FaPause/> : <FaMusic/>}
          </span>
        </button>

      </div>

      {mostrarAviso && (
        <div className="aviso-musica">
          Música activada
        </div>
      )}
    </>
  );

}

export default Musica;