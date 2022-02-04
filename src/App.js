import logo from "./logo.svg";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Bubbles from "./components/Bubbles";

function App() {
  return (
    <div className="App">
      <Bubbles />
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
