import style from "./trip.css";

export default function Trips(props) {
  return (
    <div className="trip">
      <h1>Trips</h1>
      <p>Choose the place that feeling for you</p>

      <div className="card">
        <div className="cart-container">
          <div className="image">
            <img src={props.img} alt="destination.jpg" />
          </div>
          <h3>Mountain</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iste
            doloribus quibusdam? Qui eaque odit quam. Perferendis sed dolor
            natus aspernatur. Possimus modi fuga delectus voluptatibus
            voluptatem vero minima consequuntur?
          </p>
        </div>

        <div className="cart-container">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1518029055716-04f90b79c50c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="destination.jpg"
            />
          </div>
          <h3>Desert</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iste
            doloribus quibusdam? Qui eaque odit quam. Perferendis sed dolor
            natus aspernatur. Possimus modi fuga delectus voluptatibus
            voluptatem vero minima consequuntur?
          </p>
        </div>

        <div className="cart-container">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1601701748979-be3215445510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="destination.jpg"
            />
          </div>
          <h3>Explore</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iste
            doloribus quibusdam? Qui eaque odit quam. Perferendis sed dolor
            natus aspernatur. Possimus modi fuga delectus voluptatibus
            voluptatem vero minima consequuntur?
          </p>
        </div>
      </div>
    </div>
  );
}
