import { CheckCircle2 } from "lucide-react";
import { resources } from "../constants";

const ResourcesSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        RESOURCES
      </h2>
      <div className="flex flex-wrap">
        {resources.map((resource, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {resource.title}
              </p>
              <p className="mb-8 text-neutral-400">
                {resource.description}
              </p>
              <ul>
                {resource.points.map((point, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={resource.link}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;

