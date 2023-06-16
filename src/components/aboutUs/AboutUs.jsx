import style from "./aboutus.css";

export default function AboutUs(props) {
  return (
    <div className="about-container">
      <div className="about-history">
        <h1>
          {props.title} <span>{props.spanHistory}</span>
        </h1>
        <p>{props.subtitle}</p>
      </div>

      <div className="about-mision">
        <h1>
          {props.title} <span>{props.spanMision}</span>
        </h1>
        <p>{props.subtitle}</p>
      </div>

      <div className="about-vision">
        <h1>
          {props.title} <span>{props.spanVision}</span>
        </h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
