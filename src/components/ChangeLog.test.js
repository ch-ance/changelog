import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import ChangeLog from "./ChangeLog";
import Home from "./Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CookiesProvider>
      <Home>
        <ChangeLog />
      </Home>
    </CookiesProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
