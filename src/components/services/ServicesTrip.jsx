import { Tripitems } from "../TripItem";
import style from "../hero/trip.css";

export default function Services() {
  return (
    <>
      <div className="trip">
        <h1>Enjoy of us services</h1>
        <div className="card">
          {Tripitems.map((item, index) => {
            return (
              <div className={item.cName2} key={index}>
                <div className="image">
                  <img src={item.img} alt="destination.jpg" />
                </div>
                <h3>{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  iste doloribus quibusdam? Qui eaque odit quam. Perferendis sed
                  dolor natus aspernatur. Possimus modi fuga delectus
                  voluptatibus voluptatem vero minima consequuntur?
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
