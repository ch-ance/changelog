import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import ModalChange from "./ModalChange";
import Home from "./Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CookiesProvider>
      <Home>
        <ModalChange />
      </Home>
    </CookiesProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
