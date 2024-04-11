import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Galery from "./components/Galery";

const App = () => (
  <>
    <Galery/>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
