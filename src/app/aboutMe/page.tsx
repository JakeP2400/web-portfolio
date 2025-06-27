'use client'; // This component needs to be a Client Component

// app/aboutMe/page.tsx
import Navbar from '../Navbar';

import React from 'react';

// Define a simple briefcase icon directly within this file, as it's now self-contained.
const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6.75 2.25A.75.75 0 0 1 7.5 1.5h9a.75.75 0 0 1 .75.75V4.5a2.25 2.25 0 0 1-2.25 2.25h-5.25A2.25 2.25 0 0 1 6 4.5V2.25ZM1.5 9a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4.5a3 3 0 0 1-3-3V9Zm12.75 3a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h3.75V18a.75.75 0 0 0 1.5 0v-3.75H18a.75.75 0 0 0 0-1.5h-3.75V12Z"
      clipRule="evenodd"
    />
  </svg>
);

// This is now the page component for '/aboutMe'
export default function AboutMePage() {
  <Navbar />
  // Hardcoded data for multiple job entries
  const jobExperiences = [
    {
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2022 - Present',
      description: [
        'Led development of scalable backend services using Node.js and TypeScript.',
        'Implemented new features, resulting in a 20% increase in user engagement.',
        'Mentored junior developers and conducted code reviews.',
      ],
      color: 'bg-blue-500', // Corresponding Tailwind background color class
    },
    {
      jobTitle: 'Software Developer',
      company: 'Innovate Systems',
      duration: 'Jul 2019 - Dec 2021',
      description: [
        'Developed and maintained web applications using React and Python.',
        'Collaborated with cross-functional teams on product design and feature implementation.',
        'Optimized database queries for improved performance.',
      ],
      color: 'bg-purple-500', // Corresponding Tailwind background color class
    },
    {
      jobTitle: 'Junior Developer',
      company: 'Future Tech Co.',
      duration: 'Sep 2017 - Jun 2019',
      description: [
        'Assisted in front-end development using HTML, CSS, and JavaScript.',
        'Participated in daily stand-ups and sprint planning sessions.',
        'Learned agile methodologies and version control systems.',
      ],
      color: 'bg-green-500', // Corresponding Tailwind background color class
    },
    {
      jobTitle: 'Intern Software Engineer',
      company: 'Startup Innovations',
      duration: 'Jun 2017 - Aug 2017',
      description: [
        'Contributed to a new mobile app feature under senior guidance.',
        'Performed testing and bug fixing on existing codebase.',
        'Gained exposure to full-stack development environment.',
      ],
      color: 'bg-yellow-500', // Adding another color for variety
    },
  ];

  return (
    // Main page container with a simple background and text color (consider dark mode)
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        My Professional Experience
      </h1>

      {/* Outer container for the entire timeline */}
      <div className="relative w-full max-w-4xl"> {/* Increased max-w for more timeline items */}
        {/* Vertical Line - This will be the consistent center line for the timeline */}
        <div className="hidden md:block w-0.5 bg-gray-300 absolute h-full top-0 left-1/2 -translate-x-1/2"></div>

        {/* Map over job experiences to render each item */}
        {jobExperiences.map((job, index) => {
          const isEven = index % 2 === 0; // Determines if the item is on the left or right side

          // Conditional classes for positioning the content box and icon
          const contentPositionClasses = isEven ? 'md:left-1/2 md:pl-12' : 'md:right-1/2 md:pr-12 md:text-right';
          // Icon is always centered on the line
          const iconPositionClasses = 'left-1/2 -translate-x-1/2';

          return (
            <div key={index} className="relative mb-8 md:flex md:justify-center w-full">
              {/* The Map Point Icon */}
              <div
                className={`absolute z-10 top-0 mt-3 transform ${iconPositionClasses}
                           flex items-center justify-center w-10 h-10 rounded-full
                           border-4 border-white dark:border-gray-900 ${job.color} shadow-lg`}
              >
                {/* Ensure icon scales and is white */}
                <BriefcaseIcon className="w-6 h-6 text-white transform scale-100" />
              </div>

              {/* Job Details Box */}
              <div
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border-t-4 ${job.color.replace('bg-', 'border-')}
                           w-full md:w-5/12 flex flex-col justify-between transition-all duration-300
                           ${isEven ? 'md:mr-auto' : 'md:ml-auto'} // Alternates left/right on md screens
                            z-0 md:static mt-16 md:mt-0 // Adjust margin for small screens, make static on md+
                           ${contentPositionClasses} // Apply left/right positioning from md breakpoint
                           `}
              >
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{job.jobTitle}</h3>
                  <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">{job.company}</h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{job.duration}</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {job.description.map((point, descIndex) => (
                      <li key={descIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
