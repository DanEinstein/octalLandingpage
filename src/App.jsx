import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import VisionSection from './components/VisionSection';
import DeveloperSection from './components/DeveloperSection';
import CTASection from './components/CTASection';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll-reveal animations (same logic as original landing page)
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

    document.querySelectorAll('.problem-card, .timeline-item, .perk').forEach((el) => {
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
      <ProblemSection />
      <SolutionSection />
      <VisionSection />
      <DeveloperSection />
      <CTASection />
      <SignupForm />
      <Footer />
    </>
  );
}
