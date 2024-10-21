import menBuildingHouses from "../assets/builders.jpg";
import farming from "../assets/farming.jpg";
import wellnessCheck from "../assets/wellnessCheck.jpg";


const ReasonSlide = ({ backgroundImage, title, description, peopleReached }) => {
    return (
      <div>
        
        <div
          className="z-0 brightness-75 transition hover:brightness-100 rounded-lg flex-none w-[300px] h-full lg:w-[400px] lg:h-[300px] min-w-[300px] bg-cover bg-no-repeat rounded-r-5xl 2xl:rounded-5xl scroll-container"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            
        </div>
        
        <div className="flex h-full flex-col items-start justify-between py-5">
          <div className="flexCenter gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-2xl text-white">{title}</h4>
              <p className="text-white text-lg">{description}</p>
            </div>
          </div>
          <div className="flexCenter gap-6">
            <p className="bold-16 md:bold-20 text-white">{peopleReached}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const OurApproach = () => {
    return (
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          
          <ReasonSlide
            backgroundImage={menBuildingHouses}
            title="Rehousing GBV Survivors"
            description="We partner with local communities to build low-cost, safe housing using sustainable materials like mud. This provides shelter for survivors of GBV, offering them a place to start healing."
            peopleReached="200+ Families Rehoused"
          />
  
          <ReasonSlide
            backgroundImage={farming}
            title="Farming and Empowerment"
            description="Through agricultural training programs, we empower GBV survivors with skills in sustainable farming. This program provides them with the means to achieve financial independence."
            peopleReached="150+ Survivors Empowered"
          />
  
          <ReasonSlide
            backgroundImage={wellnessCheck}
            title="Wellness and Support Visits"
            description="Our wellness visits focus on checking up on survivors living outside our facilities. We ensure their mental and physical health is prioritized and provide toys for children to promote healing."
            peopleReached="500+ Visits Conducted"
          />
  
        </div>
      </section>
    );
  };
  
  export default OurApproach;
  
  