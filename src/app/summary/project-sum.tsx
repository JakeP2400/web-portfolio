
"use client";
//import React, { useState } from 'react'

const ProjSummary = () => {

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:underline mb-5">Projects</h1>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch"> {/* Changed items-center to items-stretch */}
        {/* Project 1 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 dark:text-gray-300 rounded-xl"> 
          <h1 className="hover:underline text-lg font-bold mb-2 dark:text-white">Building a BadUSB Library</h1>
          <p className="text-center">BadUSB is an app on a Flipper Zero which emulates a USB Rubber Ducky. Head over to my GitHub to view some of the custom scripts I have made</p>
          <p className="mt-2 text-gray-800 dark:text-gray-300 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            <a href="https://github.com/JakeP2400/BadUSB" className="text-grey-700 hover:underline">Repository</a>
          </p>
        </div>
        {/* Project 2 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 dark:text-gray-300 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2 dark:text-white">Building a password Cracker</h1>
          <p className="text-center">I am in the progress of building a simple password cracker script which cycles through Brute-Forcing a password until correctly cracked</p>

        </div>
        {/* Project 3 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 dark:text-gray-300 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2 dark:text-white">Keylogger</h1>  
          <p className="text-center">Keyloggers are very useful tools, and I am currently exploring by building my own</p>
        </div>
      </div>
    </div>
  )
}

export default ProjSummary