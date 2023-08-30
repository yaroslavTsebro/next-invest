import { ReactNode } from "react";
import "./TextBlock.scss";

export function TextBlock(props: TextBlock) {
  let classes = "text-block " + (props.className ? props.className : "");
  classes += props.center ? " text-block_center" : "";
  return <div className={classes}>{props.children}</div>;
}

interface TextBlockTitleIcon extends ClassProps {
  src: string;
  alt: string;
}

interface TextBlockText extends ClassProps {
  children: ReactNode;
}

interface TextBlock extends ClassProps {
  children: ReactNode[];
  center?: boolean;
}

interface ClassProps {
  className?: string;
}

export function TextBlockTitleIcon(props: TextBlockTitleIcon) {
  const classes =
    "text-block__icon " + (props.className ? props.className : "");
  return (
    <div className={classes}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export function TextBlockTitle(props: TextBlockText) {
  const classes =
    "text-block__title " + (props.className ? props.className : "");
  return <div className={classes}>{props.children}</div>;
}

export function TextBlockText(props: TextBlockText) {
  const classes =
    "text-block__text " + (props.className ? props.className : "");
  return <div className={classes}>{props.children}</div>;
}

export function TextBlockButton(props: TextBlockText) {
  const classes =
    "text-block__button " + (props.className ? props.className : "");
  return <button className={classes}>{props.children}</button>;
}
