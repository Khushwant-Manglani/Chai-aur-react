import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    // attributes
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit the google",
};

const MyApp = () => {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
};

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const actualReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
  " ",
  2 + 2
);

ReactDOM.createRoot(document.getElementById("root")).render(actualReactElement);
