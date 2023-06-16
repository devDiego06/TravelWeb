import style from "../hero/hero.css";

export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.img} alt="" />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <a href={props.url} className={props.btnShow}>
          {props.button}
        </a>
      </div>
    </div>
  );
}
