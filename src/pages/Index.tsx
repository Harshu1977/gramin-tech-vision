import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVision';
import Vision2030 from '@/components/Vision2030';
import Community from '@/components/Community';
import JoinForm from '@/components/JoinForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <MissionVision />
          <Vision2030 />
          <Community />
          <JoinForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
