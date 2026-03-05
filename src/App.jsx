import { useState } from "react";
import EnvelopeIntro from "./components/EnvelopeIntro";
import Hero from "./components/Hero";
import Ribbon from "./components/Ribbon";
import Presentacion from "./components/Presentacion";
import Padrinos from "./components/Padrinos";
import Ubicaciones from "./components/Ubicaciones";
import Itinerario from "./components/Itinerario";
import DressCode from "./components/DressCode";


function App() {
  const [mostrarInvitacion, setMostrarInvitacion] = useState(false);

  return (
    <>
      {!mostrarInvitacion ? (
        <EnvelopeIntro onOpen={() => setMostrarInvitacion(true)} />
      ) : (
        <>
          <Hero />
          <Ribbon text="Acompañame en el día más feliz de mi vida" color="rosa" />
          <Presentacion />
          <Padrinos />
          <Ribbon text="¡Este día es muy especial y que asistas lo hace aún más!" color="rosa" />
          <Ubicaciones />
          <Ribbon text="¡Este día es muy especial y que asistas lo hace aún más!" color="rosa" />
          <Itinerario />
          <DressCode />
        </>
      )}
    </>
  );
}

export default App;