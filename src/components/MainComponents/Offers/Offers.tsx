import { Card, Offer, SecurityType } from "../../common/Card/Card";
import { Decor } from "../../common/Decor/Decor";
import {
  TextBlock,
  TextBlockText,
  TextBlockTitle,
} from "../../common/TextBlock/TextBlock";
import { CardList } from "../CardList/CardList";
import "./Offers.scss";

export function Offers() {
  return (
    <section className="offers">
      <div className="offers__container">
        <TextBlock className="offers__text" center={true}>
          <TextBlockTitle>Offerings open for investment</TextBlockTitle>
          <TextBlockText>
            Explore pre-vetted investment opportunities available in a growing
            number of industry categories.
          </TextBlockText>
        </TextBlock>
        <CardList />
        <div className="offers__view-all">
          <button className="button button_tansparent-blue">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
