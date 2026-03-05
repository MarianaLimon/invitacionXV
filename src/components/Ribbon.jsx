import "../css/Ribbon.css";

export default function Ribbon({ text, color = "vino" }) {
  return (
    <div className={`ribbon ribbon-${color}`}>
      <p>{text}</p>
    </div>
  );
}