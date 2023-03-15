export default function contactInfo() {
  return (
    <div className="contactInfo">
      <div className="contactTitle1" />
      <div className="contactTitle2" />
      <div className="contactBox">
        <h2>Let's get in contact!</h2>
        <div className="contactDescription">
          <form action="" className="contactInput">
            <input type="text" id="name" className="input" placeholder="Name" />
            <input
              type="text"
              id="email"
              className="input"
              placeholder="Email"
            />
            <input
              type="text"
              id="company"
              className="input"
              placeholder="Company"
            />
            <input
              type="text"
              id="subject"
              className="input"
              placeholder="Subject"
            />
            <textarea
              id="message"
              className="input"
              placeholder="Add a Message"
              cols="70"
              rows="20"
            />
            <input type="submit" id="submit" />
          </form>
          <div className="lisaContact">
            <p>Email:</p>
            <p>lisa.bugayong@gmail.com</p>
            <p>Phone:</p>
            <p>(949) 351-1697</p>
            <p>Linkedin logo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
