import {people} from "../constants"

const TeamSection = () => {
    return (
      <div className="mt-20">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {people.map((person, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-4">
              <div className="p-6 border border-neutral-700 rounded-xl text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl mb-2">{person.name}</h3>
                <p className="text-neutral-400">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default TeamSection;