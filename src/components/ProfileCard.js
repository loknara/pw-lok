import Card from "./Card";
import "./profilecard.scss";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div
        className="right"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Card title="Connect With Me!" smallcard>
          <div className="socialmedia">
            <a
              href="https://www.linkedin.com/in/lokeshnarasani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">LinkedIn</div>
            </a>
            <a
              href="https://github.com/loknara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">GitHub</div>
            </a>
          </div>
          <div className="socialmedia">
            <a
              href="https://devpost.com/loknara?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">Devpost</div>
            </a>
            <a href="mailto:lokeshnarasani@gmail.com" target="_top">
              <div className="card">Email</div>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;
