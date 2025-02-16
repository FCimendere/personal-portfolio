import React from "react";
import { decodeEmail } from "../utils/emailDecoding";
import GradientTextButton from "./GradientTextButton";

const EmailButton = () => {
  const email = import.meta.env.VITE_PERSONAL_MAIL;
  const actualEmail = decodeEmail(email);

  return (
    <>
      <GradientTextButton
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={true}
        className="custom-class"
      >
        <a href={`mailto:${actualEmail}?subject=Contact&body=Hello,`}>
          SEND EMAIL
        </a>
      </GradientTextButton>
    </>
  );
};

export default EmailButton;
