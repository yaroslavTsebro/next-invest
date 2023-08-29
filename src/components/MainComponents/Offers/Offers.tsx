import { Card, Offer, SecurityType } from "../../common/Card/Card";
import {
  TextBlock,
  TextBlockText,
  TextBlockTitle,
} from "../../common/TextBlock/TextBlock";
import "./Offers.scss";

const card: Offer = {
  name: "Oxalis",
  location: "Brooklyn, NY",
  description:
    "A recognized leader in language immersion & early education, opening second school.",
  raised: 574920,
  needToRaise: 1000000,
  minInvest: 100,
  maturity: 48,
  investmentMultiple: 1.4,
  securityType: SecurityType.RevenueSharingNote,
  tags: ["house", "Family Business"],
  link: "#",
  src: "../../../assertions/offers/1.jpg",
  alt: "house",
};

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
        <div className="offers__body">
          <Card offer={card}/>
        </div>
        <div className="offers__view-all">
          <button className="button button_tansparent-blue">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
