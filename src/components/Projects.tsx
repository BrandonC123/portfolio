"use client";

import { useState, useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { TbFolder } from "react-icons/tb";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Image Container */}
      <div className='relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        {/* Gradient overlay on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        {/* Tech stack badge */}
        <div className='absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm'>
          <p className='text-xs font-semibold text-accent'>{techStack}</p>
        </div>
      </div>

      {/* Content */}
      <div className='p-3 sm:p-4'>
        <h4 className='text-lg sm:text-xl font-bold text-black mb-1 group-hover:text-accent transition-colors duration-300'>
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
  ];

  return (
    <div className='flex flex-col gap-4 mb-8'>
      <SectionHeader title='Projects' icon={<TbFolder className='text-lg' />} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};
