import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import FooterMobile from "./components/footerMobile/FooterMobile";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Content />
      <div className="buttonContainer"><button className="button">Получить консультацию</button>
      </div>
      <Footer />
      <FooterMobile />
    </div>
  );
}

export default App;
