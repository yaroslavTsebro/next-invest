import "./ProgressBar.scss";

interface ProgressBarProps extends FillerProps {
  filterClassName?: string;
}

interface FillerProps {
  percentage: number;
  className?: string;
}

export function ProgressBar(props: ProgressBarProps) {
  const classes = "progress-bar " + (props.className ? props.className : "");
  return (
    <div className={classes}>
      <Filler className={props.filterClassName} percentage={props.percentage} />
    </div>
  );
}

function Filler(props: FillerProps) {
  const classes = "filter " + (props.className ? props.className : "");
  return (
    <div
      className={classes}
      style={{
        width: `${props.percentage}%`,
        background: "#7B61FF",
        height: "100%",
      }}
    />
  );
}
