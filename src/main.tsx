import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Lap2 from "../pages/Lap2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Lap2 />
    </BrowserRouter>
  </StrictMode>,
);
