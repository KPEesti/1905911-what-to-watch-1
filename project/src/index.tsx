import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const testProps = {
  name: "The Grand Budapest Hotel",
  genre: "Comedy",
  released: 2014,
};

root.render(
  <React.StrictMode>
    <App
      name={testProps.name}
      genre={testProps.genre}
      released={testProps.released}
    />
  </React.StrictMode>
);
