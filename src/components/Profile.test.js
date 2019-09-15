import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import Profile from "./Profile";
import Home from "./Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CookiesProvider>
      <Home>
        <Profile />
      </Home>
    </CookiesProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
