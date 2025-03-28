"use client"
import { useState, useRef, useEffect } from 'react';


import { BackgroundLinesDemo } from "./BackgroundLinesDemo";
import { CardSpotlightDemo } from "./CardSpotlightDemo";
import { Gridbackground } from "./Gridbackground";
import { SparklesPreview } from "./SparklesPreview";

// Navigation bar component
interface RightNavBarProps {
  activeSection: string;
}

function RightNavBar({ activeSection }: RightNavBarProps) {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed right-20 top-1/2 transform -translate-y-1/2 bg-transparent w-24 p-4 rounded-l-lg shadow-lg z-10">
      <ul className="space-y-10 text-center">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-lg font-bold transition-colors ${
                activeSection === section.id ? 'text-white' : 'text-gray-400'
              } hover:text-white`}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Topcomp() {
  const [activeSection, setActiveSection] = useState('about');

  // Refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      if (intersectingEntries.length > 0) {
        // Find the section closest to the top of the viewport
        const topEntry = intersectingEntries.reduce((prev, current) => {
          const prevTop = prev.boundingClientRect.top;
          const currentTop = current.boundingClientRect.top;
          return currentTop < prevTop ? current : prev;
        });

        // Update active section based on the topmost intersecting section
        if (topEntry.target === aboutRef.current) {
          setActiveSection('about');
        } else if (topEntry.target === skillsRef.current) {
          setActiveSection('skills');
        } else if (topEntry.target === projectsRef.current) {
          setActiveSection('projects');
        } else if (topEntry.target === contactRef.current) {
          setActiveSection('contact');
        }
      }
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe each section
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div ref={aboutRef} id="about">
        <Gridbackground /> {/* About section */}
      </div>
      <div ref={skillsRef} id="skills">
        <SparklesPreview /> {/* Skills section */}
      </div>
      <div ref={projectsRef} id="projects">
        <BackgroundLinesDemo /> {/* Projects section */}
      </div>
      <div ref={contactRef} id="contact">
        <CardSpotlightDemo /> {/* Contact section */}
      </div>
      <RightNavBar activeSection={activeSection} />
    </div>
  );
}

