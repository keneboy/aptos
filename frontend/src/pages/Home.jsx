import React, { useState } from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import Collection from "../components/collection/Collection";
import CheckIcon from "@mui/icons-material/Check";
import Hamburger from "../components/Hamburger";
import Sidenav from "../components/Sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import ComingSoon from "../components/ComingSoon";

export default function Home() {
  const [active, setActive] = useState(false);
  function handleToggle() {
    setActive(!active);
  }
  const [launch, setLaunch] = useState(false);
  function handleLaunch() {
    setLaunch(!launch);
  }
  return (
    <div className="home">
      {launch && <ComingSoon handleClose={handleLaunch} />}
      <Sidenav active={active} handleClose={handleLaunch} />
      <nav>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dddj0ycqp/image/upload/q_auto:good/v1654839110/logo_m4vlzv.webp"
            alt=""
            className="logo"
          />
        </Link>
        <ul className="navigation">
          <li onClick={handleLaunch}>Launch App</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#story">Story</a>
          </li>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>
            <a href="#road">Road Map</a>
          </li>
        </ul>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://twitter.com/no_fappers?t=KP166UrrANQMCn40ychg8A&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/HuwTKcD5Xy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <Hamburger onClick={handleToggle} status={active} />
      </nav>
      <section className="welcome">
        <h1>
          WELCOME TO NO <span> FAPPERS</span>
        </h1>
        <p>
          NO FAPPERS is a pioneer NFT ecosystem with a therapeutic Effect on its
          community and a stake to earn model.
        </p>
        <div className="button_wrapper">
          <button>
            <a href="#collection">View Collection</a>
          </button>
          <button>
            <a
              href="https://discord.gg/HuwTKcD5Xy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord
            </a>
          </button>
        </div>
      </section>
      <section className="about" id="about">
        <h1>About</h1>
        <p>NO Fappers NFT = Your key to a new life grip.</p>
        <p>
          No-Fapper ecosystem is geared towards creating a systematic
          environment that utilizes the power of Non-Fungible Token as an
          instrument to support those who wishes to give up pornography and
          masturbation and help channel that energy into better awareness
          mindfulness.{" "}
        </p>
      </section>
      <section className="story" id="story">
        <h1>The Story</h1>
        <p>
          In a time when Darkness prevails in the mind of the Homosapien, an
          evil forces (Adiru) planted a dark orb in the mind of the Elites of
          Imiko Kingdom.{" "}
        </p>
        <p>
          This Orb extracted much power from the minds of the Elites of Imiko
          kingdom. This dark orb became so strong that it started releasing and
          endless amount of destructive Dopamine rush into the minds of the
          Elite.
        </p>
        <p>
          The Elites of Imiko Kingdom out of ignorance harnessed and used the
          Euphoric sensation of this destructive energy as a quick fix and a
          brief escape from reality. Little did they know that they were feeding
          the same inner monster that will in turn end up destroying them.{" "}
        </p>
        <p>
          This went on for Centuries and Many Elites of Imiko kingdom fell
          victim of this ordeal. This Destructive Dopamine rush gave rise to an
          endless amount of social vices which often ends in guilt and regret
          after engaging in them, growing the grasp of this dark power and
          gradually bringing an end to Imiko kingdom as it was once known.
        </p>
        <p>
          If Nothing is done to stop this dark path of inevitable destruction,
          The great kingdom of Imiko and all its inhabitants will be at the
          verge of extinction.
        </p>
        <p>
          An old wise saying amongst the elites, if there’s a will there’s a
          way. A few brave men amongst the elites came together and set out on a
          quest to find a detoxing orb mentioned in an old folktale passed down
          for generations. It had the power to gradually loose the elites from
          the grasp of the dark orb if it could be found and taken on a daily
          basis, though its said to be in limited supply. 2000 brave men set out
          on this journey and legend has it that this magical orb was found but
          is still yet to be distributed amongst the elites.
        </p>
        <p>
          The sole mission of these 2000 brave men is to abolish Adiru from the
          minds of the Elites of Imiko kingdom with the help of this found
          magical orb.
        </p>
        <p>
          Only time shall tell which of the two forces will prevail at the end.
        </p>
      </section>
      <Collection />
      <section className="roadmap" id="road">
        <h1>Roadmap</h1>
        <div className="steps">
          <div className="card">
            <h2>PHASE 1</h2>
            <ul className="desc">
              <li>
                <CheckIcon className="check" /> Creation of socials (Discord and
                Twitter)
              </li>
              <li>
                <CheckIcon className="check" /> Organic community building
              </li>
              <li>
                <CheckIcon className="check" /> Onboarding DAOs
              </li>
              <li>
                <CheckIcon className="check" /> Art refinement
              </li>
              <li>
                <CheckIcon className="check" /> Web site release{" "}
              </li>
              <li>
                <CheckIcon className="check" /> Announcing our collection
                metrics (supply, mint date, minting price)
              </li>
              <li>
                <CheckIcon className="check" /> Launch partner collaboration{" "}
              </li>
              <li>
                <CheckIcon className="check" /> Minting event{" "}
              </li>
              <li>
                <CheckIcon className="check" /> Secondary market place listing{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="steps">
          <div className="card">
            <h2>PHASE 2</h2>
            <ul className="desc">
              <li>
                <CheckIcon className="check" /> Staking goes live
              </li>
              <li>
                <CheckIcon className="check" /> Native token $NFP creation and
                listing and liquidity provision.
              </li>
              <li>
                <CheckIcon className="check" /> Charity donations
              </li>
              <li>
                <CheckIcon className="check" /> Branded merches production
              </li>
              <li>
                <CheckIcon className="check" /> Merches distribution to holders.
              </li>
            </ul>
          </div>
        </div>
        <div className="steps">
          <div className="card">
            <h2>PHASE 3</h2>
            <ul className="desc">
              <li>
                <CheckIcon className="check" /> Roadmap V 2 Release
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <ul className="footer_c">
          <li>
            <img
              src="https://res.cloudinary.com/dddj0ycqp/image/upload/q_auto:good/v1654839110/logo_m4vlzv.webp"
              alt=""
            />
          </li>
          <li>
            <ul className="socials">
              <li>
                <a
                  href="https://twitter.com/no_fappers?t=KP166UrrANQMCn40ychg8A&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="tweet" />
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
          </li>
        </ul>
        <p className="copyright">© 2022 No Fappers NFT All Rights Reserved</p>
      </footer>
    </div>
  );
}
