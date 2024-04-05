import React, { useContext, useEffect, useRef } from "react";

import proposalVideo from "../../assets/video/Elite_Teams_proposal.mp4";
import { HeaderContext } from "../../context/context";

const Main = () => {
  const headerContext = useContext(HeaderContext);
  const proposalVideoContainerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const { height } = headerContext.current.getBoundingClientRect();
      if (proposalVideoContainerRef.current)
        proposalVideoContainerRef.current.style.height =
          window.innerHeight - height + "px";
    };
    handleResize();
    window.addEventListener("rezie", () => handleResize());
    return () => {
      window.removeEventListener("rezie", () => handleResize());
    };
  }, []);
  return (
    <div>
      <div
        className="relative w-full"
        id="proposalVideoContainer"
        ref={proposalVideoContainerRef}
      >
        <video
          autoPlay
          loop
          id="proposalVideo"
          className="w-full h-full"
          src={proposalVideo}
        />

        {/* CTA buttons */}
        <div className="absolute top-1/2 md:top-2/3 left-1/2 md:left-1/4 flex flex-col sm:flex-row gap-[16px] transform -translate-x-1/2 -translate-y-1/2 text-[18px] xl:text-[20px]">
          <a href="https://calendly.com/eliteteams/book-your-call">
            <button className="p-2 md:p-3 xl:p-4 border border-white text-white bg-black rounded-lg uppercase font-semibold cursor-pointer hover:text-black hover:bg-white duration-200">
              Book a Call
            </button>
          </a>
          <a href="https://forms.gle/etSbkaEwKpoFj5m88">
            <button className="p-2 md:p-3 xl:p-4 border border-white text-white bg-black rounded-lg uppercase font-semibold cursor-pointer hover:text-black hover:bg-white duration-200">
              Fill a Form
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
