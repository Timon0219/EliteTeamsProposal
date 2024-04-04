import React, { useEffect, useRef } from "react";

import proposalVideo from "../../assets/video/Elite_Teams_proposal.mp4";

const Main = () => {
  const proposalVideoContainerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const headerHeight = document.getElementById("header").innerHeight || 80;
      if (proposalVideoContainerRef.current)
        proposalVideoContainerRef.current.style.height =
          window.innerHeight - headerHeight + "px";
    });
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
          muted
          loop
          id="proposalVideo"
          className="w-full h-full"
          src={proposalVideo}
        />

        {/* CTA buttons */}
        <div className="absolute top-1/2 md:top-3/4 left-1/2 md:left-1/4 flex flex-col sm:flex-row gap-[8px] sm:gap-[16px] transform -translate-x-1/2 -translate-y-1/2 text-[10px]  xs:text-[14px] md:text-[20px] xl:text-[26px]">
          <a href="https://calendly.com/eliteteams/book-your-call">
            <button className="p-2 md:p-4 xl:p-6 border border-white text-white bg-black rounded-lg uppercase font-semibold cursor-pointer hover:text-black hover:bg-white duration-200">
              Book a Call
            </button>
          </a>
          <a href="https://forms.gle/etSbkaEwKpoFj5m88">
            <button className="p-2 md:p-4 xl:p-6 border border-white text-white bg-black rounded-lg uppercase font-semibold cursor-pointer hover:text-black hover:bg-white duration-200">
              Fill a Form
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
