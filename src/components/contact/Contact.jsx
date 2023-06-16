import style from "./contact.css";

export default function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <div className="form-container">
        <h1>
          Write Now!<span> What you wait?</span>
        </h1>
        <form class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required="" />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone" required="" />
          </div>
          <div class="form-group">
            <label for="textarea">How Can We Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required=""
            ></textarea>
          </div>
          <button class="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <form className="form">
        <input type="text" placeholder="Name Complete" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea
          name="content"
          placeholder="Description"
          id="content"
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <button className="btnSend">Send</button> */
}
