import React from "react";
import { CookiesProvider } from "react-cookie";
import Home from "./components/Home";

function App() {
  return (
    <CookiesProvider>
      <Home />
    </CookiesProvider>
  );
}

export default App;
