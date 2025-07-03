
"use client";
//import React, { useState } from 'react'

const ContactSummary = () => {

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:underline mb-5">Contact Me!</h1>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch">
        {/*
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2 dark:text-gray-200">Email</h1>
          <p className="text-center dark:text-gray-300">You can reach me at: <a href="mailto:jakepole4@gmail.com" className="text-blue-500 hover:underline">my email</a></p>
        </div>*/}
      </div>
        {/* Changed the main container to flex and added gap-x-4 for horizontal gaps */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Contact 2 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600 rounded-xl">
            <h1 className="hover:underline text-lg font-bold mb-2 dark:text-gray-200">LinkedIn</h1>
            <p className="text-center dark:text-gray-300">You can add me on <a href="https://www.linkedin.com/in/jakep24/" className="text-blue-500 hover:underline">my LinkedIn</a></p>
        </div>
        {/* Contact 3 */}
        <div className="flex-1 flex flex-col justify-center items-center bg-blue2 p-4 dark:bg-gray-600  rounded-xl">
            <h1 className="hover:underline text-lg font-bold mb-2 dark:text-gray-200">GitHub</h1>
            <p className="text-center dark:text-gray-300">You can follow me on <a href="https://github.com/JakeP2400" className="text-blue-500 hover:underline">my GitHub</a></p>
        </div>
      </div>
    </div>    
  )
}

export default ContactSummary