import { Component } from "react";
import style from "./nav.css";
import { Link } from "react-router-dom";
import { Menuitems } from "./MenuItems";

export default class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="nav-item">
        <h1>Travelous</h1>

        <div onClick={this.handleClick} className="menu-icons">
          <i
            class={
              this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        {/* esconder el nav */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i class={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
