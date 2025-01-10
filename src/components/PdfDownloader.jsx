import React from "react";
import axios from "axios";

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
    <button
      className="relative block mx-auto my-6 no-underline uppercase overflow-hidden w-40 text-center text-mid-blue rounded-3xl border border-light-grey shadow-custom-out 
              hover:none hover:shadow-custom-inset hover:text-mid-blue hover:border-dark-blue cursor-pointer"
      onClick={() => {
        downloadPdf(PNG_FILE_URL);
      }}
    >
      Download CV
    </button>
  );
};

export default PdfDownloader;
