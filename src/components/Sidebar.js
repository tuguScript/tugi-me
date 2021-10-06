import React from "react"
import "./sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import TButton from "./Button/Button"

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar-container">
        <div className="title">👋 Hi, I'm Tugi</div>
        <nav className="navigation-drawer">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Articles</li>
          </ul>
        </nav>
        <div className="sidebar-ft">
          <TButton
            style={{
              background: "rgba(58, 53, 53, 0.5)",
              backdropFilter: "blur(10px)",
              border: "0px",
            }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </TButton>
          <TButton>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </TButton>
          <TButton>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </TButton>
        </div>
      </div>
    </div>
  )
}
