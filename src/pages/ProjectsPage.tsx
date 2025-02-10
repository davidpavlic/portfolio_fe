import './styling/ProjectsPage.css';
import ProjectCard from "../components/organisms/ProjectCard";
import "../components/organisms/styling/ProjectCard.module.css";
import NoserYoungImage from "../assets/images/NoserYoung.jpeg";
import AccentureImage from "../assets/images/Accenture.png";
import UnityImage from "../assets/images/Unity.png";
import SchweizImage from "../assets/images/Schweiz.png";
import SwiftImage from "../assets/images/Swift.png";
import InformaticonImage from "../assets/images/Informaticon.png";
import ReactImage from "../assets/images/React.png";



export const ProjectsPage = () => {
  return (
    <div >
      <ProjectCard
        title="Portfolio Website"
        description="A modern responsive portfolio website built with React and TypeScript, featuring project showcases and interactive elements."
        imageUrl={ReactImage}
        techStack={["React", "TypeScript", "CSS Modules", "Vite"]}
        layout="right"
      />

      <ProjectCard
        title="Informaticon AG - ZAKU AG"
        description="A modern responsive portfolio website built with React and TypeScript, featuring project showcases and interactive elements."
        imageUrl={InformaticonImage}
        techStack={["React", "TypeScript", "CSS Modules", "Vite"]}
        layout="left"
      />

      <ProjectCard
        title="Diving App"
        description="Full-stack e-commerce solution with shopping cart, user authentication, and payment integration."
        imageUrl={SwiftImage}
        techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
        layout="right"
      />

      <ProjectCard
        title="2D multiplayer shooter in Unity"
        description="Full-stack e-commerce solution with shopping cart, user authentication, and payment integration."
        imageUrl={UnityImage}
        techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
        layout="left"
      />

      <ProjectCard
        title="Military Service"
        description="Full-stack e-commerce solution with shopping cart, user authentication, and payment integration."
        imageUrl={SchweizImage}
        techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
        layout="right"
      />

      <ProjectCard
        title="Accenture AG - IPA: Test Automation"
        description="Full-stack e-commerce solution with shopping cart, user authentication, and payment integration."
        imageUrl={AccentureImage}
        techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
        layout="left"
      />

      <ProjectCard
        title="Noser Young Professionals - NOA"
        description="Full-stack e-commerce solution with shopping cart, user authentication, and payment integration."
        imageUrl={NoserYoungImage}
        techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
        layout="right"
      />
    </div>
  );
};
export default ProjectsPage;