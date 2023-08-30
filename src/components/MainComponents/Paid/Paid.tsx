import {
  TextBlock,
  TextBlockText,
  TextBlockTitle,
  TextBlockTitleIcon,
} from "../../common/TextBlock/TextBlock";
import "./Paid.scss";
import icon from "../../../assertions/icons/Subtract.svg";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'; // ADD THIS
import { useRef } from "react";
import { ScriptableContext } from "chart.js/auto";

export function Paid() {
  const ref = useRef();
  const data = () => {
    return {
      labels: [2015, 2016, 2017, 2018, 2019, 2020],
      datasets: [{
        label: "Q2",
        data: [1, 3, 2.5, 4.5, 6.5, 1.5],
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#7B61FF");
          gradient.addColorStop(1, "rgba(123, 97, 255, 0.00)");
          return gradient;
        },
        borderColor: "#7B61FF"
      }]
    };
  };

  return (
    <section className="paid">
      <div className="paid__container">
        <TextBlock className="paid__body paid-body">
          <TextBlockTitleIcon
            className="paid-body__icon"
            src={icon}
            alt="Substract"
          />
          <TextBlockTitle className="paid-body__title">
            $7M+ paid out to investors
          </TextBlockTitle>
          <TextBlockText className="paid-body__text">
            Next Invest has already paid out over $7M in cash returns to
            investors. Earn potential cash payments through unique revenue-share
            and debt financing investments.
          </TextBlockText>
        </TextBlock>
        <div className="paid__chart">
          <Line data={data()} ref={ref}/>
        </div>
      </div>
    </section>
  );
}
