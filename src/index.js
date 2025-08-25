import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // optional reset
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

createRoot(document.getElementById("root")).render(<App />);

serviceWorkerRegistration.register();

