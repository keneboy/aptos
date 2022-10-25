import React from "react";
import bg from "../assets/images/coming_soon.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ComingSoon({ handleClose, active }) {
  console.log(active);
  return (
    <div className={active ? "coming_soon active" : "coming_soon "}>
      <main
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)),url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src="https://res.cloudinary.com/dddj0ycqp/image/upload/q_auto:good/v1654839110/logo_m4vlzv.webp"
          alt=""
          className="logo"
        />
        <CloseIcon className="close" onClick={handleClose} />
        <h1>Coming Soon</h1>
        <p>Get ready something cool is coming and its gonna be mind blowing</p>
        <ul className="socials">
          <li>
            <a
              href="https://twitter.com/no_fappers?t=KP166UrrANQMCn40ychg8A&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="tweet" />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/HuwTKcD5Xy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} className="tweet" />
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
