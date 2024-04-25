import Card from "./Card";
import PortfolioBanner from "../assets/chatbot.png";
import { Navigate, useNavigate } from "react-router-dom";

const PortfolioCard = () => {
  const navigate = useNavigate();
  return (
    <div className="portfolio-card">
      <a
        onClick={(e) => {
          e.preventDefault();
          navigate("/projects");
        }}
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Card
          title="Portfolio"
          subtitle="See in action"
          desc=""
          direction="column"
          image={PortfolioBanner}
          smallcard
        />
      </a>
    </div>
  );
};

export default PortfolioCard;
