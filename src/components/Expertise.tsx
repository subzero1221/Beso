import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { SiMongodb } from "react-icons/si";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { useTranslation } from "react-i18next";

console.log("SiMongodb:", SiMongodb);

const labelsFirst = [
  "React",
  "Next",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
];

const labelsSecond = [
  "Node",
  "Express",
  "RESTful APIs",
  "JWT",
  "CORS",
  "WebSockets",
  "Socket.io",
  "Postman",
];

const labelsThird = ["MongoDB", "NoSQL", "PostgreSQL", "SQL", "Redis"];
const labelsFourth = ["ChaGPT", "OpenAI", "HuggingFace"];
const labelsFifth = [
  "Docker",
  "AWS",
  "CI/CD",
  "Nginx",
  "Google Cloud",
  "Railway",
  "Heroku",
  "Render",
];

function Expertise() {
  const { t } = useTranslation();

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Front End</h3>
            <p>{t("front")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <h3>Back End</h3>
            <p>{t("back")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            {/* @ts-ignore */}
            <SiMongodb size={44} />
            <h3>Database</h3>
            <p>{t("database")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>{t("devops")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFifth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAi & LLMs</h3>
            <p>{t("genai")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFourth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
