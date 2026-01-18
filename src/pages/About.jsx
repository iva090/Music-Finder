import React from 'react';

export default function About() {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        <div className="mb-8">
          <h2 className="text-purple-800 font-mono text-sm mb-2 tracking-widest uppercase font-bold">
            Project Overview
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Final Project
          </h1>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            This application was developed as the capstone project for the 
            <span className="text-white font-medium"> Frontend Web Development </span> 
            course. It serves as a fully functional music discovery interface powered by real-time data.
          </p>
          
          <div className="bg-white/5 border-l-4 border-purple-800 p-4 rounded-r-lg italic text-sm text-gray-400">
            "Leveraging the Spotify Web API to bridge the gap between complex data and a seamless user experience."
          </div>

          
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-3">
          <div className="h-2 w-2 bg-purple-800 rounded-full animate-pulse" />
          <p className="text-xs text-gray-500 font-mono uppercase tracking-tighter">
            Security Status: All API Credentials Encrypted & stored in .env
          </p>
        </div>
      </div>
    </div>
  );
}