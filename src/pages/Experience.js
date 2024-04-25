import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#ffffff">
        <VerticalTimelineElement
          animate={true}
          className="vertical-timeline-element--education"
          date="August 2021- May 2025"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The University of Texas at Dallas
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> B.S Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2021 - September 2021"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tobu Pengin - Software Engineering Intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Dallas, Tx</h4>
          <p>
            Developed an end to end open-source CRM cloud solution for an ERP
            system using Flask, Python, and Docker
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2023 - May 2023"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UTDesign - Software Engineer (Contract)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Richardson, TX</h4>
          <p>
            Managed a team of 4 to build a service provider enabling login and
            authentication through UTD SSO
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - August 2023"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            PNC - Software Engineering Intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
          <p>
            Developed an end to end solution for tracking Cloud costs and
            automating total cost of ownership using scaled usage comparisons
            across the company using Java, SpringBoot, and Vue.js
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2023 - Present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Machine Learning and Artificial Intelligence Lab Researcher
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>

          <p>
            Developed a machine learning algorithm to distinguish between DDoS
            and normal data in computer networks through collaboration and
            quantitative research on traffic generation and intrusion detection.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2024 - present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dallas Mavericks - Software Engineering Intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>

          <p>
            Worked on an analytics dashboard using Node.js, React, and
            JavaScript to provide scouts and front office staff with real-time
            insights into player/team statistics and scouting reports
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
