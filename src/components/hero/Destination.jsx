import style from "./destination.css";

export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <div className="destination-container">
        <div className="decoration-text">
          <h3>Taal Volcano, Batangas</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur repellendus nulla optio quaerat eligendi temporibus
            nesciunt asperiores sed aperiam vero. Velit, enim! Dolor repellendus
            aut earum rerum harum natus molestias. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptatibus minus vitae odit ullam
            facere, aut sit molestias eum debitis quae, soluta quo praesentium
            voluptas eaque, impedit nobis ducimus tempora ea.
          </p>
        </div>

        <div className="container-img animate__backInLeft">
          <div className="img-left">
            <img
              src="https://images.unsplash.com/photo-1537824598505-99ee03483384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="img-right">
            <img
              src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="destination-container-2">
        <div className="decoration-text">
          <h3>Travel at the place of your dreams</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur repellendus nulla optio quaerat eligendi temporibus
            nesciunt asperiores sed aperiam vero. Velit, enim! Dolor repellendus
            aut earum rerum harum natus molestias. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptatibus minus vitae odit ullam
            facere, aut sit molestias eum debitis quae, soluta quo praesentium
            voluptas eaque, impedit nobis ducimus tempora ea.
          </p>
        </div>

        <div className="container-img">
          <div className="img-left">
            <img
              src="https://images.unsplash.com/photo-1608058085330-f911536537ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </div>
          <div className="img-right">
            <img
              src="https://images.unsplash.com/photo-1541343672885-9be56236302a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
