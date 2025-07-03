
"use client";
//import React, { useState } from 'react'

const ProjSummary = () => {

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:underline mb-5">Projects</h1>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch"> {/* Changed items-center to items-stretch */}
        {/* Project 1 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl"> 
          <h1 className="hover:underline text-lg font-bold mb-2">Building a BadUSB Library</h1>
          <p className="text-center">BadUSB is an app on a Flipper Zero which emulates a USB Rubber Ducky. Head over to my GitHub to view some of the custom scripts I have made</p>
        </div>
        {/* Project 2 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2">Building a password Cracker</h1>
          <p className="text-center">I am in the progress of building a simple password cracker script which cycles through Brute-Forcing a password until correctly cracked</p>

        </div>
        {/* Project 3 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2">Keylogger</h1>  
          <p className="text-center">Keyloggers are very useful tools, and I am currently exploring by building my own</p>
        </div>
      </div>
    </div>
  )
}

export default ProjSummary