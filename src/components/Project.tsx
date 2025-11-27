import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";
import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://echonext-production.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://echonext-production.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Echo</h2>
          </a>
          <p>{t("echo")}</p>
        </div>
        <div className="project">
          <a
            href="https://fbai-production.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://fbai-production.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>FBAI</h2>
          </a>
          <p>{t("fbai")}</p>
        </div>
        <div className="project">
          <a
            href="https://the-wild-oasis-website-rose.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://the-wild-oasis-website-rose.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>The Wild Oasis</h2>
          </a>
          <p>{t("oasis")}</p>
        </div>
        <div className="project">
          <a
            href="https://wildoasisss.netlify.app/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://wildoasisss.netlify.app/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            <h2>The Wild Oasis(admin panel)</h2>
          </a>
          <p>{t("oasisadmin")}</p>
        </div>
        <div className="project">
          <a
            href="https://world-wise-five-azure.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://world-wise-five-azure.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>WorldWise</h2>
          </a>
          <p>{t("worldwise")}</p>
        </div>
        <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>P Menu</h2>
          </a>
          <p>{t("pmenu")}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
