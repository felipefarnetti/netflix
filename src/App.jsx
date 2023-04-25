import "./App.css";
import Section from "./Components/Section";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <section>
        <Section />
      </section>
    </div>
  );
}

export default App;
