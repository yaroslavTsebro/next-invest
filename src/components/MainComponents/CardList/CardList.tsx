import { Card, Offer, SecurityType } from "../../common/Card/Card";
import "./CardList.scss";
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

export function CardList() {
  return (
    <div className="offers__body">
      <Card offer={card} />
      <Card offer={card} />
      <Card offer={card} />
      <Card offer={card} />
      <Card offer={card} />
      <Card offer={card} />
    </div>
  );
}
