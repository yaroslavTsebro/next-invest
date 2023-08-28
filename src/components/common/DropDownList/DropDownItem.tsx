import { ReactNode } from "react";
import "./DropDownItem.scss";

export interface LinkProps {
  href: string;
  text: ReactNode;
  className?: string;
}

export function DropDownItem(props: LinkProps) {
  const className =
    "drop-down-menu__item " + (props.className ? props.className : "");
  return (
    <li className={className}>
      <a href={props.href} className="drop-down-menu__link">
        {props.text}
      </a>
    </li>
  );
}
