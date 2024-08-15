import video1 from "../assets/gbv6.mp4";
import video2 from "../assets/protest.mp4";

//import React from "react";
import { gbvContent } from "../constants";

const GBVSection = () => {
  return (
    <div className="bg-orange-200 text-black p-6 sm:p-5 lg:p-8">
      <div className="max-w-4xl  mx-auto py-4 mb-4 ">
        <h2 className="text-2xl sm:text-2xl lg:text-5xl mb-4">
  What are the forms of gender-based violence (GBV)?
  </h2>
        <p className="sm:text-xl whitespace-pre-line">
          {gbvContent}
        </p>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default GBVSection;
