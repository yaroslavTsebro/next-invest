import "./DropDownList.scss";
import { ReactNode, useState } from "react";
import arrow from "../../../assertions/icons/CaretDown.svg";
export interface CompontentProps {
  children: ReactNode;
  title: ReactNode;
  className?: string;
}

export function DropDownList(props: CompontentProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleList = () => {
    setIsOpened(!isOpened);
  };

  const className = "drop-down " + (props.className ? props.className : "");

  return (
    <div className={className}>
      <div
        className="drop-down__wrapper"
        onMouseEnter={toggleList}
        onMouseLeave={toggleList}
      >
        <div className="drop-down__button">
          {props.title}
          <img className="drop-down__arrow" src={arrow} alt="arrow" />
        </div>
        <div className="drop-down__body drop-down-menu">
          {isOpened && (
            <ul className="drop-down-menu__list">{props.children}</ul>
          )}
        </div>
      </div>
    </div>
  );
}
