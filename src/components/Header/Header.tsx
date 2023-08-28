import { useState } from "react";
import { useWindowWidthAndHeight } from "../../hooks/useWindowWidthAndHeight";
import { CSSTransition } from "react-transition-group";
import "./Header.scss";

export function Header() {
  const [width, height] = useWindowWidthAndHeight();
  const [isNavVisible, setNavVisibility] = useState<boolean>(false);
  const isSmall = width < 1000;

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          NEXT INVEST
        </a>
        <nav className="header__menu menu">
          <CSSTransition
            in={!isSmall || isNavVisible}
            timeout={350}
            classNames="menu__animations"
            unmountOnExit
          >
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Investment Opportunities
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  How it works
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  About us
                </a>
              </li>
            </ul>
          </CSSTransition>
        </nav>
        {isSmall && (
            <button onClick={toggleNav} className="header__burger">
              🍔
            </button>
          )}
        <div className="header__actions">
          <button className="header__login button button_purple">Login</button>
          <button className="header__register button">Register</button>
        </div>
      </div>
    </header>
  );
}
