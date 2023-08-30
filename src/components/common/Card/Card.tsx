import "./Card.scss";
import photo from "../../../assertions/offers/1.jpg";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useState } from "react";
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
function toDollarCurrency(amout: number): string {
  return amout.toLocaleString("us-US", { style: "currency", currency: "USD" });
}

export function Card(props: OfferProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const offer = props.offer;

  const percentage = offer.raised / (offer.needToRaise / 100);
  const raised = toDollarCurrency(offer.raised);
  const needToRaise = toDollarCurrency(offer.needToRaise);
  const minInvestment = toDollarCurrency(offer.minInvest);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <div
        className="card__wrapper"
        onMouseEnter={flipCard}
        onMouseLeave={flipCard}
      >
        {!isFlipped && (
          <div className="card__image">
            <img src={photo} alt={offer.alt} />
          </div>
        )}
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
          {isFlipped && (
            <>
              <div className="founded__separator"></div>
              <table className="fouded__table table">
                <tr className="table__row">
                  <th className="table__header">Security Type</th>
                  <td className="table__value">
                    {offer.securityType.toString()}
                  </td>
                </tr>
                <tr className="table__row">
                  <th className="table__header">Investment Multiple</th>
                  <td className="table__value">{offer.investmentMultiple}x</td>
                </tr>
                <tr className="table__row">
                  <th className="table__header">Maturity</th>
                  <td className="table__value">{offer.maturity} Months</td>
                </tr>
                <tr className="table__row">
                  <th className="table__header">Min. Investment</th>
                  <td className="table__value">{minInvestment}</td>
                </tr>
              </table>
            </>
          )}
        </div>
        {isFlipped && (
          <div className="fouded__action">
            <button className=" fouded__button button button_blue">View</button>
          </div>
        )}
      </div>
    </div>
  );
}
