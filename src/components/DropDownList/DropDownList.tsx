import "./DropDownList.scss";
import { ReactNode, useState } from "react";
import arrow from "../../assertions/icons/CaretDown.svg";
export interface CompontentProps {
  children: ReactNode;
  options: LinkProps[];
}

export interface LinkProps {
  href: string;
  text: string;
}

export function DropDownList(props: CompontentProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleList = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="drop-down">
      <div
        className="drop-down__wrapper"
        onMouseEnter={toggleList}
        onMouseLeave={toggleList}
      >
        <div className="drop-down__button">
          {props.children}
          <img className="drop-down__arrow" src={arrow} alt="arrow" />
        </div>
        <div className="drop-down__body drop-down-menu">
          {isOpened && props.options && props.options.length > 0 && (
            <ul className="drop-down-menu__list">
              {props.options.map((option) => (
                <li className="drop-down-menu__item">
                  <a href={option.href} className="drop-down-menu__link">
                    {option.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
