//import React from 'react';
import GlobalRightsImage from '../assets/umoja1.png'; 


const PartnershipsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-32 px-6 lg:px-20">
      <div className="lg:w-1/2">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Gender-Based Violence
        </h2>
        <p className="py-6 text-lg text-neutral-500">
        Gender-based violence (GBV) is a serious infringement of human rights and poses a substantial risk to health and safety. 
        GBV includes physical, sexual, and psychological violence, such as rape, sexual assault, trafficking, and forced prostitution. 
        Although anyone, regardless of gender, can suffer violence related to their sex or gender, 
        women and girls are especially vulnerable. It is estimated that one in three women will experience sexual or physical v
        iolence during their lifetime.
        </p>
        
      </div>
      <div className="lg:w-1/2 mt-5 lg:mt-0 lg:pl-5 flex">
        <img
          src={GlobalRightsImage}
          alt="Global Rights for Women"
          className=" w-full h-full object-cover shadow-lg"
        />
      </div>
      
    </div>
    
    
    
  );
};

export default PartnershipsSection;
