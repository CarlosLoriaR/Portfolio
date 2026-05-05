import React, { useState } from "react";
import TopAppBar from "./components/TopAppBar";
import SideNavBar from "./components/SideNavBar";
import BottomNavBar from "./components/BottomNavBar";
import HeroDecks from "./components/HeroDecks";
import ProjectTable from "./components/ProjectTable";
import SkillsetSection from "./components/SkillsetSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutMeSection from "./components/AboutMeSection";
import InfoPanel from "./components/InfoPanel";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("aboutme");
  const [selectedProject, setSelectedProject] = useState(null);

  const renderMainContent = () => {
    switch (activeSection) {
      case "aboutme":
        return (
          <div className="flex flex-col md:flex-row md:flex-1 md:min-h-0">
            <AboutMeSection />
            <InfoPanel selectedProject={null} activeSection="aboutme" />
          </div>
        );
      case "skillset":
        return (
          <div className="flex flex-col md:flex-row md:flex-1 md:min-h-0">
            <SkillsetSection />
            <InfoPanel selectedProject={null} activeSection="skillset" />
          </div>
        );
      case "experience":
        return (
          <div className="flex flex-col md:flex-row md:flex-1 md:min-h-0">
            <ExperienceSection />
            <InfoPanel selectedProject={null} activeSection="experience" />
          </div>
        );
      case "projects":
      default:
        return (
          <div className="flex flex-col md:flex-row md:flex-1 md:min-h-0">
            <ProjectTable onProjectSelect={setSelectedProject} />
            <InfoPanel
              selectedProject={selectedProject}
              activeSection="projects"
            />
          </div>
        );
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md flex flex-col dark md:overflow-hidden md:h-screen">
      <TopAppBar />
      <div className="flex flex-1 md:overflow-hidden">
        <SideNavBar onSectionChange={setActiveSection} />
        <main className="flex-1 flex flex-col bg-[#121212] md:overflow-y-auto scrollbar-hide pb-16 md:pb-0">
          <HeroDecks />
          {renderMainContent()}
          <Footer />
        </main>
      </div>
      <BottomNavBar activeNav={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
}
