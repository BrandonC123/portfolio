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
      <div className='relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
        {/* Tech stack badge */}
        <div className='absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full'>
          <p className='text-xs font-semibold text-gray-700'>{techStack}</p>
        </div>
      </div>

      {/* Content */}
      <div className='p-3 sm:p-4'>
        <h4 className='text-lg sm:text-xl font-bold text-black mb-1'>
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
      image: "/projects/video.webp",
      title: "TribeMeet",
      techStack: "Vue.js • TypeScript • Tailwind • 100ms",
      description: "CSUS CSC Senior Project - Video conferencing application",
    },
    {
      image: "/projects/repo.png",
      title: "RepoLaunch",
      techStack: "Next.js • TypeScript • Tailwind",
      description:
        "Template based GitHub README.md generator with Markdown/HTML live rendering.",
    },
    {
      image: "/projects/gh-home.webp",
      title: "GitHub Clone",
      techStack: "React • Firebase • CSS",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Firebase for backend services.",
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
