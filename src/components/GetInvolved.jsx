import { CheckCircle2 } from "lucide-react";
//import gbv5 from "../assets/gbv5.webp";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section id="get-involved" className=" py-12">
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          How to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Get Involved
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Image Section */}
         

          {/* Checklist Items */}
          <div className="flex flex-col justify-center">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6"
              >
                <div className="flex items-center">
                  <div className="text-orange-500 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-orange-500">{item.title}</h3>
                    <p className="text-orange-200 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

