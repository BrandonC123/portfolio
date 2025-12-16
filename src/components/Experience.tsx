"use client";

import { useState, useEffect } from "react";

interface ExperienceItemProps {
  companyLogo: string;
  companyName: string;
  role: string;
  dateRange: string;
  responsibilities: string[];
  index: number;
}

const ExperienceItem = ({
  companyLogo,
  companyName,
  role,
  dateRange,
  responsibilities,
  index,
}: ExperienceItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered animation delay based on index
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 lg:mb-3 lg:pb-3 lg:border-b lg:border-gray-100'>
        <div className='flex gap-2 lg:gap-3 items-start'>
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            className='h-12 w-12 sm:h-14 sm:w-14 lg:h-12 lg:w-12 rounded-lg object-cover flex-shrink-0 border border-gray-100'
          />
          <div className='flex-1 min-w-0'>
            <h4 className='text-black font-semibold text-sm sm:text-base lg:text-base mb-0 lg:mb-1'>
              {companyName}
            </h4>
            <p className='text-gray-700 text-xs sm:text-sm lg:text-sm font-medium mb-0.5 lg:mb-0'>
              {role}
            </p>
            <p className='text-xs sm:text-sm lg:hidden text-gray-500 font-medium'>
              {dateRange}
            </p>
          </div>
        </div>
        <p className='text-xs sm:text-sm lg:text-sm text-gray-600 lg:text-gray-600 font-medium lg:whitespace-nowrap lg:ml-4 mt-0.5 lg:mt-0'>
          {dateRange}
        </p>
      </div>
      <ul className='space-y-2 lg:space-y-2'>
        {responsibilities.map((responsibility, idx) => (
          <li
            key={idx}
            className='text-sm md:text-base text-gray-700 leading-relaxed pl-4 lg:pl-5 relative before:content-["•"] before:absolute before:left-0 lg:before:left-2 before:text-gray-400 before:font-bold'
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      companyLogo: "/pressplay.jpg",
      companyName: "Press Play Dance Convention",
      role: "Software Developer",
      dateRange: "July 2025 - Present",
      responsibilities: [
        "Built responsive web applications using HTML, CSS, and JavaScript, integrating frontend components with backend services to ensure dynamic data rendering and seamless user experience",
        "Created scalable Python data processing scripts to normalize and verify data via third-party REST APIs, leveraging batching and concurrency for efficient handling of large datasets",
        "Worked cross-functionally using Agile methodology to ensure functional and design requirements were met for projects",
      ],
    },
    {
      companyLogo: "/eworld.jpg",
      companyName: "eWorld Enterprise Solutions",
      role: "Software Developer",
      dateRange: "October 2024 - June 2025",
      responsibilities: [
        "Built responsive web applications using HTML, CSS, and JavaScript, integrating frontend components with backend services to ensure dynamic data rendering and seamless user experience",
        "Created scalable Python data processing scripts to normalize and verify data via third-party REST APIs, leveraging batching and concurrency for efficient handling of large datasets",
        "Worked cross-functionally using Agile methodology to ensure functional and design requirements were met for projects",
      ],
    },
    {
      companyLogo: "/imageapp.jpg",
      companyName: "Image App",
      role: "Software Developer",
      dateRange: "May 2023 - May 2024",
      responsibilities: [
        "Refactored infrastructure for handling asynchronous processes with WebSockets increasing completion rate by 20%.",
        "Implemented Google OAuth2.0 sign-in using Passport middleware and session store.",
        "Created Rest API endpoints (Node.js, Express) to facilitate user subscriptions by integrating with Stripe's financial infrastructure using webhooks.",
        "Developed core functions of a SaaS platform including user sign-flow and launched product to thousands of unique visitors.",
      ],
    },
    {
      companyLogo: "/imageapp.jpg",
      companyName: "Image App",
      role: "Software Development Intern",
      dateRange: "Nov 2022 - May 2023",
      responsibilities: [
        "Worked with designers to implement Figma designs to responsive frontend components ensuring cross-platform compatibility. (React, Typescript)",
        "Collaborated with senior team members to create platform-specific editing tools by using external APIs.",
        "Created server-side rendering routes using Express.js to enable cross-platform rich link previews via Open Graph meta tags.",
      ],
    },
  ];

  return (
    <div className='flex flex-col gap-4 mb-6'>
      <h3 className='text-black border-b self-start'>Experience</h3>
      <div className='flex flex-col gap-4 sm:gap-5'>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} index={index} />
        ))}
      </div>
    </div>
  );
};
