import KiddieBank from "../assets/KiddieBank.png";
import UTDSSO from "../assets/UTDSSO.webp";
import NBA from "../assets/NBA.png";
import CanCare from "../assets/CanCare.png";
import SF from "../assets/SF.png";
import DallasMavs from "../assets/DallasMavs.png";
import Chatbot from "../assets/chatbot.png";

export const ProjectList = [
  {
    name: "CFG - CanCare",
    image: CanCare,
    skills: "React, Python, LlamaIndex, Flask, Firebase",
   
    githubLink: "https://github.com/cfgtexas23/Team-20/tree/main",
    blurb1: "Note: github link may be invalid due to JP Morgan rules on Hackathon code access after Hackathon has been completed.",
    blurb2: "Led a team of 7 to develop a patient/client dashboard for CanCare, enabling cancer patients to connect with mentors for support during treatment. I implemented a BERT transformer model to intelligently match patients with optimal mentors based on compatibility factors derived from onboarding questions. I also created a disease-specific chatbot using a Retrieval Augmented Generation (RAG) model and LlamaIndex to provide patients with personalized information. This project won one us first place at JP Morgan's CFG!",

  },
  {
    name: "StateFarm ClaimGuradian",
    image: SF,
    skills: "React Native, JavaScript, Python, GPT Embeddings, ElevenLabs",
    externalLink: "https://devpost.com/software/sf-1nmvi7?ref_content=my-projects-tab&ref_feature=my_projects",
    githubLink: "https://github.com/loknara/HackUTDSF",
    blurb1: "ClaimGuardian for State Farm streamlines the insurance claims process for small businesses. It provides a user-friendly platform where business owners can file claims, view their quote, active claims, and active policies. ClaimGuardian was built using a robust tech stack that includes React Native for cross-platform mobile app development and Python for the backend. We used GPT Embeddings to make our app not only faster, but smarter as well. We also used ElevenLabs to do easy and smart text to speech geenration to make an easy to interact with app. "
  },
  {
    name: "Kiddie Bank",
    image: KiddieBank,
    skills: "JavaScript, Python,HTML, CSS, Django, SQLlite ",
    githubLink: "https://github.com/loknara/KiddieBank",
    blurb1: "I Led a team of 5 in designing and developing a web application to teach children aged 8-16 how to manage money for PNC's LEAD in Code Hackathon, where the team and I developed a full-stack application catering to both parent and child accounts. We utilized Django to handle page routing, navigation, and account creation; HTML and CSS for the page itself; JS for some small calculations in our code; SQLite for data storage. Our application won us 2nd place!",

  },
  {
    name: "Mavs Demo",
    image: DallasMavs,
    skills: "React, JavaScript, Chart.js",
    externalLink: "https://main--mavsdemo.netlify.app/",
    githubLink: "https://github.com/loknara/mavs-demo",
    blurb1: "This project is a web application designed to provide the mavs front office with detailed information on games including schedules, game details, and scouting reports. It utilizes React for the frontend to offer a responsive user experience, and uses JSON data to provde the stats and various other pices of key information. The application allows users to view games scheduled for the current week or day, access detailed game reports, and read scouting reports on players."
  },
  {
    name: "UTD SSO",
    image: UTDSSO,
    skills: "Node.js, express.js",
    githubLink: "https://github.com/UTDallasEPICS/epics-sso",
    blurb1: "Managed a team of 4 to build a service provider enabling login and authentication through UTD SSO for third party applications created by UTDesign for UTD students. Facilitated over 5,000 users across all EPICS projects to sign in using their existing university usernames and passwords through efficient integration."
  },
  {
    name: "NBA Analytics Tool",
    image: NBA,
    skills: "React, Python, Flask, Scikit-Learn",
    githubLink:"https://github.com/loknara/Prop-er",
    blurb1:"A project my friends and I are currenlty working on, aimed to help sports better better view thier sports bets as well as make more educated bets based on our model. I Architected a RESTful API with Flask to allow users to search for players currenlty playing in a game to veiw thier live stats. Our model has attained a game predicting accuracy of 67% and player scoring accuracy of 65% through a Regression model based on data and optimized parameters.s "
  },
 
  {
    name: "Insurance Chatbot",
    image: Chatbot,
    skills: "Python, Streamlit, LlamaIndex",
  },
  
  
];
