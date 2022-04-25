import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"

function App() {
  return (
    <div className="App">
      <TopBar />
      <Single />
    </div>
  );
}

export default App;
