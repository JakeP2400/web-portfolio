
"use client";
//import React, { useState } from 'react'

const SkillsSummary = () => {

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-blue1 m-5 p-2.5 dark:bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:underline mb-5">Projects</h1>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch"> {/* Changed items-center to items-stretch */}
        <div className="flex-1 flex flex-col justify-center items-center bg-white p-4 rounded-xl"> 
          <h1 className="hover:underline text-lg font-bold mb-2">Skill 1</h1>
          <p className="text-center"> This is an ultimate guide on making a project this project is a great project which does this and that and scans and stuff</p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center bg-white p-4 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2">Project 2</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center bg-white p-4 rounded-xl">
          <h1 className="hover:underline text-lg font-bold mb-2">Project 3</h1>  
          <p className="text-center"> This is an ultimate guide on making a project this project is a great project which does this and that</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsSummary