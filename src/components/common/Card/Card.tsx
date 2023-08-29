import "./Card.scss";
import photo from "../../../assertions/offers/1.jpg";
import { ProgressBar } from "../ProgressBar/ProgressBar";
export enum SecurityType {
  RevenueSharingNote,
}

export interface Offer {
  name: string;
  location: string;
  description: string;
  raised: number;
  needToRaise: number;
  minInvest: number;
  maturity: number;
  investmentMultiple: number;
  securityType: SecurityType;
  tags: string[];
  link: string;
  src: string;
  alt: string;
}

interface OfferProps {
  offer: Offer;
}
function toDollarCurrency(amout: number): string{
  return amout.toLocaleString("us-US", {style: "currency",currency: "USD",});
}

export function Card(props: OfferProps) {
  const offer = props.offer;

  const percentage = offer.raised / (offer.needToRaise / 100);
  const raised = toDollarCurrency(offer.raised);
  const needToRaise = toDollarCurrency(offer.needToRaise);
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__image">
          <img src={photo} alt={offer.alt} />
        </div>
        <div className="card__body">
          <div className="card__address address">
            <div className="address__name">{offer.name}</div>
            <div className="address__location">{offer.location}</div>
          </div>
          <div className="card__description">{offer.description}</div>
          <div className="card__fouded fouded">
            <ProgressBar
              className="fouded__progress-bar"
              percentage={percentage}
            />
            <div className="fouded__info">
              <span>{raised}</span> raised of {needToRaise}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
