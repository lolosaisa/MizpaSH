import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
//import FeatureSection from "./components/FeaturesSection";
import Workflow from "./components/GetInvolved.jsx";
import Footer from "./components/Footer";
import ResourcesSection from "./components/ResourcesSection";
import Testimonials from "./components/Testimonials";
import AboutUsSection from "./components/MazpaSection";
import ServicesSection from "./components/ServicesSection"
import PartnershipsSection from "./components/PatnershipSection";
import GBVSection  from "./components/GBVSection";
import TeamSection from "./components/TeamSection";
import AddresingGBV from "./components/AddressingGBV.jsx";
import TrainingSection from "./components/TrainingSection";
//import UnderConstruction from "./components/UnderConstruction";
import './index.css'
import OurApproach from "./components/OurApproach.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        
        <HeroSection />
        <AboutUsSection />
        <PartnershipsSection />
        <AddresingGBV />
        <GBVSection />
        <ServicesSection />
        <OurApproach />
        <TrainingSection />
        
        <Workflow />
        <ResourcesSection />
        <Testimonials />
        <TeamSection />
        
        <Footer />
      </div>
    </>
  );
};

export default App;
