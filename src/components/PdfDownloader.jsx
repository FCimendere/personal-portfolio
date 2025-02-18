import React from "react";
import axios from "axios";
import GradientTextButton from "./GradientTextButton";
import { usePostHog } from "posthog-js/react";
import posthog from "posthog-js";

const PdfDownloader = () => {
  const PNG_FILE_URL = `${window.location.origin}/Fulya-Çimendere-Resume.pdf`;
  const downloadPdf = async (url) => {
    try {
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });

      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");

      aTag.href = blobURL;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      document.body.removeChild(aTag);
      window.URL.revokeObjectURL(blobURL);
    } catch (error) {
      console.log("LOG--Something went wrong during the download", error);
    }
  };

  return (
    <>
      <GradientTextButton
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={true}
        className="custom-class mx-auto"
      >
        <button
          onClick={() => {
            downloadPdf(PNG_FILE_URL);
            posthog.capture("download_button_clicked", {
              user_name: "Fly the Hedgehog",
            });
          }}
        >
          DOWNLOAD CV
        </button>
      </GradientTextButton>
    </>
  );
};

export default PdfDownloader;
