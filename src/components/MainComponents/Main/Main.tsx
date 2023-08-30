import { GetStarted } from "../GetStarted/GetStarted";
import { Offers } from "../Offers/Offers";
import { Paid } from "../Paid/Paid";
import RaiseCapital from "../RaiseCapital/RaiseCapital";
import "./Main.scss";

export function Main() {
  return (
    <main className="main">
      <GetStarted />
      <Offers />
      <Paid />
      <RaiseCapital />
    </main>
  );
}
