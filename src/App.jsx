import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ResearchSection from './components/ResearchSection';
import HowItWorks from './components/HowItWorks';
import DevBuilding from './components/DevBuilding';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <ResearchSection />
      <HowItWorks />
      <DevBuilding />
      <CTASection />
      <Footer />
    </>
  );
}
