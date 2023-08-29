import { GetStarted } from "../GetStarted/GetStarted";
import { Offers } from "../Offers/Offers";
import "./Main.scss";

export function Main() {
  return (
    <main className="main">
      <GetStarted />
      <Offers/>
    </main>
  );
}
