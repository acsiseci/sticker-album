import React from "react";
import App from "./App";
import "../src/style.scss";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
