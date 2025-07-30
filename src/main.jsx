import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { BrowserRouter } from "react-router-dom";

posthog.init("phc_qiOUlNz5UTVZwm5a4BZbYbt22J0V6HyydMNiHmqrmk2", {
  api_host: "https://eu.i.posthog.com",
  capture_pageview: false, // one time rendering control pageview posthog
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);
