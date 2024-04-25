import Card from "./Card";
import Icon from "../assets/icon2.png";
import "./contactCard.scss";
const ContactCard = () => {
  return (
    <div
      className="contactCard"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Card>
        <div className="wrapper">
          <img src={Icon} alt="" className="icon2" />
          <div className="textbox">
            <h3>Looking for</h3>
            <h3>New Grad Positions</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactCard;
