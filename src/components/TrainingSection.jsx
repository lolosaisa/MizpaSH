import { training } from "../constants";
//import { Link } from "react-router-dom";
import backgroundImage from "../assets/gbv1.jpg"


const TrainingSection = () => {
  return (
    <section
      className="relative w-full bg-cover p-6 bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 text-center text-white max-w-4xl mx-auto rounded-lg">
        <h2 className="text-4xl sm:text-5xl mb-6">
          {training.heading}
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          {training.paragraph}
        </p>
      
      </div>
     
    </section>
  );
};

export default TrainingSection;
