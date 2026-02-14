import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import SolutionSection from './components/SolutionSection';
import DualAudienceSection from './components/DualAudienceSection';
import VisionSection from './components/VisionSection';
import DeveloperSection from './components/DeveloperSection';
import CommunitySection from './components/CommunitySection';
import CTASection from './components/CTASection';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedSelectors = [
      '.problem-card',
      '.timeline-item',
      '.perk',
      '.mv-card',
      '.process-step',
      '.audience-card',
      '.community-card',
      '.impact-stat-card',
    ];

    document.querySelectorAll(animatedSelectors.join(', ')).forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProblemSection />
      <ProcessSection />
      <SolutionSection />
      <DualAudienceSection />
      <VisionSection />
      <DeveloperSection />
      <CommunitySection />
      <CTASection />
      <SignupForm />
      <Footer />
    </>
  );
}
