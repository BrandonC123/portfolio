"use client";

import { useState, useEffect } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  techStack: string;
  description: string;
  index: number;
}

const ProjectCard = ({
  image,
  title,
  techStack,
  description,
  index,
}: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Image Container */}
      <div className='relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
        {/* Tech stack badge */}
        <div className='absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full'>
          <p className='text-xs font-semibold text-gray-700'>{techStack}</p>
        </div>
      </div>

      {/* Content */}
      <div className='p-5 sm:p-6'>
        <h4 className='text-lg sm:text-xl font-bold text-black mb-2'>
          {title}
        </h4>
        <p className='text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3'>
          {description}
        </p>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      image: "/next.svg",
      title: "Portfolio Website",
      techStack: "Next.js • TypeScript • Tailwind",
      description:
        "A modern, responsive portfolio website showcasing my projects and experience. Built with Next.js 14, featuring server-side rendering and optimized performance.",
    },
    {
      image: "/vercel.svg",
      title: "E-Commerce Platform",
      techStack: "React • Node.js • MongoDB",
      description:
        "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Features include product management, cart functionality, and order tracking.",
    },
    {
      image: "/globe.svg",
      title: "Task Management App",
      techStack: "React • Firebase • TypeScript",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Firebase for backend services.",
    },
    {
      image: "/window.svg",
      title: "Weather Dashboard",
      techStack: "React • API Integration • Chart.js",
      description:
        "Interactive weather dashboard displaying current conditions, forecasts, and historical data. Features interactive charts and location-based weather information.",
    },
  ];

  return (
    <div className='flex flex-col gap-4 mb-6'>
      <h3 className='text-black border-b self-start'>Projects</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};
