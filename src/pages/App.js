import "./App.scss";
import boat from "../img/boat.webp";

function App() {
  return (
    <div className="canva">
      <section className="top">
        <div className="sea-container">
          <div className="wave-back"></div>
          <div className="sea-content">
            <div className="boat-container">
              <img src={boat} className="boat" alt="boat"></img>
            </div>
          </div>
          <div className="wave-middle"></div>
          <div className="wave-front"></div>
        </div>
      </section>
      <section className="bottom"></section>
    </div>
  );
}

export default App;
