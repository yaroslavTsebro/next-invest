import { useState } from "react";
import { useWindowWidthAndHeight } from "../../hooks/useWindowWidthAndHeight";
import { CSSTransition } from "react-transition-group";
import "./Test.scss"

export function Test() {
  const [width, height] = useWindowWidthAndHeight();
  const [isNavVisible, setNavVisibility] = useState<boolean>(false);
  const isSmall = width < 1000;

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return <div className="Header">
    <div className="Logo">NEXT IVEST</div>
    <CSSTransition
        in={!isSmall || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
      </CSSTransition>
      {isSmall &&<button onClick={toggleNav} className="Burger">
        🍔
      </button>}
  </div>;
}
