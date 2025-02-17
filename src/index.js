// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Main from "./main";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Ensure environment variables are properly named
const POSTHOG_KEY = process.env.REACT_APP_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.REACT_APP_POSTHOG_HOST || "https://app.posthog.com"; // Default to PostHog cloud

// Initialize PostHog before using it
posthog.init(POSTHOG_KEY, {
  api_host: POSTHOG_HOST,
  autocapture: true, // Enable automatic event tracking (optional)
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <Main />
    </PostHogProvider>
  </React.StrictMode>
);
