import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import Header from "./Header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CookiesProvider>
      <Header />
    </CookiesProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
