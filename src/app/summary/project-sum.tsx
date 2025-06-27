
"use client";
//import React, { useState } from 'react'

const ProjSummary = () => {

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:underline mb-5">Projects</h1>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch"> {/* Changed items-center to items-stretch */}
        {/* Project 1 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl"> 
          <h1 className="hover:underline text-lg font-bold mb-2">Building a basic honeypot!</h1>
          <p className="text-center">Having a server in use for my home network, I like the ability to have a honeypot available to keep piece of mind</p>
        </div>
        {/* Project 2 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2">Building a simple password Cracker</h1>
          <p className="text-center">To further understand password cracking and how people crack passwords, I have built a basic password cracker which I use on my own projects</p>

        </div>
        {/* Project 3 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2">Unknown Project</h1>  
          <p className="text-center">Currently looking for a project so please contact me if you have any ideas.</p>
        </div>
      </div>
    </div>
  )
}

export default ProjSummary