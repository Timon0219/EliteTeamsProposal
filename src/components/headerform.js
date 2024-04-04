import { useState, useEffect } from "react";

const HeaderForm = () => {
  const [gmailAddress, setGmailAddress] = useState("");

  useEffect(() => {
    const extractGmailAddress = () => {
      console.log("---", document.cookie);
      const cookies = document.cookie.split(";");
      const gmailCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("GMAIL_AT=")
      );
      if (gmailCookie) {
        const [, gmail] = gmailCookie.trim().split("=");
        setGmailAddress(gmail);
      }
    };

    extractGmailAddress();
  }, []);
  return (
    <div className="px-6 bg-white border border-slate-300 border-t-black border-t-[8px] rounded-lg text-left">
      <h1 className="text-[32px]">Elite Teams Form</h1>
      <h2 className="">Form to book teams</h2>
      <div>{gmailAddress}</div>
    </div>
  );
};

export default HeaderForm;
