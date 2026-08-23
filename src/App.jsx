import Spinner from './components/Spinner';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Services from './components/Services';
import Methodology from './components/Methodology';
import TechStack from './components/TechStack';
import QASection from './components/QASection';
import CaseStudies from './components/CaseStudies';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <div className="bg-glow"></div>
      <Spinner />
      <TopBar />
      <Navbar />
      <Hero />
      <MetricsBar />
      <Services />
      <Methodology />
      <TechStack />
      <QASection />
      <CaseStudies />
      <CtaFinal />
      <Footer />
      <BackToTop />
    </>
  );
}
