import React from "react";
import { decodeEmail } from "../utils/emailDecoding";

const EmailButton = () => {
  const email = import.meta.env.VITE_PERSONAL_MAIL;
  const actualEmail = decodeEmail(email);

  return (
    <div className="">
      <a href={`mailto:${actualEmail}?subject=Contact&body=Hello,`}>
        <button
          className="relative block my-6 no-underline uppercase overflow-hidden w-40 text-center text-mid-blue rounded-3xl border border-light-grey shadow-custom-out 
              hover:none hover:shadow-custom-inset hover:text-mid-blue hover:border-dark-blue cursor-pointer"
        >
          Send Email
        </button>
      </a>
    </div>
  );
};

export default EmailButton;
