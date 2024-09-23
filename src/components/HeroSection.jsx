import video1 from "../assets/gbv6.mp4";
import video2 from "../assets/protest.mp4";
//import backgroundImage from "../assets/hero1.jpeg";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center  mt-6 lg:mt-20 bg-cover bg-center"
      //style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-neutral-400">
        Mizpa Safety House
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
          {" "}
          for GBV survivors
        </span>
      </h1>
      
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
      Mizpa-Safety House operates as an affiliate of Graywall Africa Project, 
      a registered non-profit organization that has been running since march 2014.
      At Mizpa House, we are dedicated to rescuing young women from the
        devastating grip of gender-based violence (GBV). In Kenya, more than
        half of all women have faced some form of GBV, with hundreds tragically
        losing their lives to femicide each year. Our mission is to provide a
        safe haven and a path to recovery for these survivors, offering them the
        support they need to rebuild their lives.
      </p>
      <p className="text-lg text-center text-white max-w-4xl mt-10">As one of its key initiatives, Mizpa-Safety House focuses on providing rescue and rehabilitation services, continuing the legacy of care and support under GraywallAfrica project.</p>
      
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Donate
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border text-white">
          Documentation
        </a>
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

export default HeroSection;

