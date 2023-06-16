import style from "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="div1">
        <div className="text">
          <h1>Travelous</h1>
          <p>Choose your proxime destination</p>
        </div>

        <div className="redes">
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="div2">
        <div className="target">
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div className="target">
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div className="target">
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>

        <div className="target">
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
