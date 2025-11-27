import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { useTranslation } from "react-i18next";

function Timeline() {
  const { t } = useTranslation();

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t("career_history")}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("timeline20242")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("tbilisi")}
            </h4>
            <p>{t("timeline2024_desc2")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("timeline2024")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {t("tbilisi")}
            </h4>
            <p>{t("timeline2024_desc")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("timeline2022")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              {t("tbilisi")}
            </h4>
            <p>{t("timeline2022_desc")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("timeline2020")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              {t("tbilisi")}
            </h4>
            <p>{t("timeline2020_desc")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("timeline2017")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              {t("tbilisi")}
            </h4>
            <p>{t("timeline2017_desc")}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
