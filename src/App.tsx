import { useContext } from "react";

import Portfolio from "./pages/Portfolio";

import Header from "./components/Header";
import { GlobalContext } from "./context/GlobalContext";
import AnimatedCursor from "./components/Cursor";

import "./App.scss";

function App() {
  const { theme } = useContext(GlobalContext);

  const isTable = window.innerWidth >= 768;

  return (
    <div className="App" style={{ background: theme ? "#fff" : "#0c151d" }}>
      {isTable && <AnimatedCursor />}
      <div className="appWrapper">
        <Header />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
