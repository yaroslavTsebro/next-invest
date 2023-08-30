import "./Decor.scss";
interface DecorProps {
  className?: string;
  src: string;
}

export function Decor(props: DecorProps) {
  const classes = "decor " + (props.className ? props.className : "");
  return (
    <div className={classes}>
      <img src={props.src} alt=" " />
    </div>
  );
}
