import React, { useEffect, useRef } from "react";

import proposalVideo from "../../assets/video/Elite_Teams_proposal.mp4";

const Main = () => {
  const proposalVideoContainerRef = useRef(null);
  useEffect(() => {
    if (proposalVideoContainerRef.current)
      proposalVideoContainerRef.current.style.maxHeight =
        window.innerHeight - 80 + "px";
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
        <div className="absolute top-3/4 left-1/4 flex gap-[16px] transform -translate-x-1/2 -translate-y-1/2">
          <a href="https://calendly.com/eliteteams/book-your-call">
            <button className="p-4 border border-white text-white bg-black rounded-lg uppercase text-[20px] font-semibold cursor-pointer hover:text-black hover:bg-white duration-200">
              Book a Call
            </button>
          </a>
          <a href="/forms">
            <button className="p-4 border border-white text-white bg-black rounded-lg uppercase text-[20px] font-semibold cursor-pointer hover:text-black hover:bg-white duration-200">
              Fill a Form
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
