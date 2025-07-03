
"use client";
import Image from 'next/image';

//import React, { useState } from 'react'

const Summary = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:underline">Jake Pole - Cyber Security and Networking</h1>
      <div className='flex flex-col md:flex-row'>
        
        <div className='w-full md:w-1/3 flex-shrink-0 flex justify-center md:items-center'>
          <Image
            src="/LinkedinProf.jpeg"
            alt="Profile"
            width={275}
            height={200}
            className="rounded-4xl object-cover shadow-lg m-5"
            priority
          />        
        </div>
        <div className='w-full md:w-2/3 md:m-5'>
          
          <p className="mt-2 text-gray-800 dark:text-gray-300">
            I am a passionate Computer Science student with a strong development in Networking and Cyber Security, passionate about securing individuals and companies. I excel on the understanding of how different systems communicate, building secure environments and managing vulnerabilities. Building related projects to develop my skills and explore more into the landscape.</p>
          <p className="mt-2 text-gray-800 dark:text-gray-300">
            I am currently studying at the University of Plymouth, and currently in the final few weeks of my placement year working within the University of Plymouth&apos;s Information Security Team as an Enterprise Security Analyst. I will be finishing my studies in May 2026 and looking to further persue my career from there.   
          </p>
          <p className="mt-2 text-gray-800 dark:text-gray-300 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg><a href="https://www.linkedin.com/in/jakep24/" className="text-grey-700 hover:underline">LinkedIn</a> 
          </p>
          <p className="mt-2 text-gray-800 dark:text-gray-300 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            <a href="https://github.com/JakeP2400" className="text-grey-700 hover:underline"> GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Summary