import logoImg from "./img/coderhouse.jpg";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <img alt="logo coder" src={logoImg} />
      <hr />
    </div>
  );
}

export default App;
