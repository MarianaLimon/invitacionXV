import { useEffect, useState } from "react";
import "../css/Hero.css";

export default function Hero() {

  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* Animación entrada */

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  /* PARALLAX HERO */

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* Countdown */

  useEffect(() => {

    const targetDate = new Date("August 25, 2026 11:00:00").getTime();

    const interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      className={`hero ${visible ? "show" : ""}`}
      style={{
        backgroundPosition: `center ${scrollY * 0.4}px`
      }}
    >

      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="nombre">Fernanda Hernández</h1>
        <p className="misxv">Mis XV Años</p>
        <div className="fecha">
          25 · Agosto · 2026
        </div>
        <div className="divider"></div>
        <div className="countdown">
          <div>
            <span>{timeLeft.days}</span>
            <small>DÍAS</small>
          </div>
          <div>
            <span>{timeLeft.hours}</span>
            <small>HRS</small>
          </div>
          <div>
            <span>{timeLeft.minutes}</span>
            <small>MIN</small>
          </div>
          <div>
            <span>{timeLeft.seconds}</span>
            <small>SEG</small>
          </div>
        </div>

        <div className="calendar-btn-wrapper">

          <a
            className="calendar-btn"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=XV+Fernanda+Hernández&dates=20260825T160000Z/20260825T230000Z&details=Mis+XV+Años&location=Salón+Excess"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agregar a mi calendario
          </a>

        </div>

      </div>

    </section>

  );
}