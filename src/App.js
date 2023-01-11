import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App text-center">
      <div className="weather-container">
        <Weather defaultCity="Berlin" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
