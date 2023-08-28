import "./App.scss";
import { Footer } from "./components/FooterComponents/Footer/Footer";
import { Header } from "./components/headerComponents/Header/Header";
import { Main } from "./components/MainComponents/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
