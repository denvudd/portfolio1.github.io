import Footer from './Footer';
import AboutSection from './sections/AboutSection';
import ArchiveSection from './sections/ArchiveSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';

const MainContent = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ArchiveSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default MainContent;