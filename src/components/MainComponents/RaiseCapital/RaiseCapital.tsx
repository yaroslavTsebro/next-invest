import React from "react";
import image from "../../../assertions/raise-capital/1.svg";
import "./RaiseCapital.scss";
import {
  TextBlock,
  TextBlockButton,
  TextBlockText,
  TextBlockTitle,
} from "../../common/TextBlock/TextBlock";

const RaiseCapital = () => {
  return (
    <section className="raise-capital">
      <div className="raise-capital__container">
        <TextBlock className="raise-capital__text raise-capital-text">
          <TextBlockTitle>
            Looking to raise capital for your growing business?
          </TextBlockTitle>
          <TextBlockText>
            Whether expanding or opening a brand-new concept, we make it easy to
            raise money from thousands of local investors.
          </TextBlockText>
          <TextBlockButton className="raise-capital-text__button">Apply Online</TextBlockButton>
        </TextBlock>
        <div className="raise-capital__image">
          <img src={image} alt="girl with money-tree" />
        </div>
      </div>
    </section>
  );
};

export default RaiseCapital;
