import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import "./Header.css";
import { Link } from "react-router-dom";
import ban from "../../assets/images/logos/banner.svg";
import logo from "../../assets/images/logos/logo-fond-0.png";
import { useStatus } from "../../contexts/auth";

function BurgerMenu() {
  const { login, currentUser, setLogin } = useStatus();
  const [showLinks, setShowLinks] = useState(false);
  const [showlog, setShowlog] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleShowlog = () => {
    setShowlog(!showlog);
  };
  return (
    <header>
      <div className="button-container">
        <div
          className={`burgermenu ${showLinks ? "show-burger" : "hide-burger"}`}
        >
          <ul className="burgermenu-links">
            <li className="burgermenu-items">
              <Link to="/" className="burgermenu-link">
                Accueil
              </Link>
            </li>
            <li className="burgermenu-items">
              <Link to="/" className="burgermenu-link">
                Portfolio
              </Link>
            </li>
            <li className="burgermenu-items">
              <Link to="/" className="burgermenu-link">
                Services
              </Link>
            </li>
            <li className="burgermenu-items">
              <Link to="/faq" className="burgermenu-link">
                FAQ
              </Link>
            </li>
          </ul>
          <button
            aria-label="button"
            type="button"
            className="burger-bar"
            onClick={handleShowLinks}
            onKeyDown={handleShowLinks}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        <div className="connection">
          {!login && (
            <>
              {" "}
              <Link to="/userpage">
                <button type="button">LOGIN</button>
              </Link>
            </>
          )}
          {login && (
            <>
              <img
                src={currentUser.image}
                alt="avatar"
                role="presentation"
                onClick={handleShowlog}
                onKeyDown={handleShowlog}
              />
              {showlog && (
                <>
                  <p
                    id="log-out"
                    role="presentation"
                    onClick={() => setLogin(false)}
                  >
                    se déconnecter
                  </p>
                  <Link to="/userpage">
                    <p id="log-in">mon compte</p>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
        <div className="button-responsive">
          {!login && (
            <Link to="/userpage">
              <button type="button" aria-label="button" className="button-user">
                <FaRegUser className="user" />
              </button>
            </Link>
          )}
          {login && (
            <>
              <img
                src={currentUser.image}
                alt="avatar"
                role="presentation"
                onClick={handleShowlog}
                onKeyDown={handleShowlog}
              />
              {showlog && (
                <>
                  <p
                    id="log-out"
                    role="presentation"
                    onClick={() => setLogin(false)}
                  >
                    se déconnecter
                  </p>
                  <Link to="/userpage">
                    <p id="log-in">mon compte</p>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="logo">
        <Link id="click-to-home" to="/accueil">
          <img id="banner" src={ban} alt="logo" />
          <img id="logo" src={logo} alt="logo-mini" />
        </Link>
      </div>
    </header>
  );
}

export default BurgerMenu;
