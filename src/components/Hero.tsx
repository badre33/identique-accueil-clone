
import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-8 lg:px-16 py-12">
      <div className="w-full lg:w-1/2 max-w-2xl">
        <h1 className="text-4xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
          À propos de Link
        </h1>
        <p className="text-lg lg:text-xl text-stone-600 leading-relaxed font-light">
          Link Agency conçoit des solutions stratégiques, chaque point de contact 
          devient une opportunité d'engager et d'inspirer.
        </p>
      </div>
      <div className="hidden lg:block w-1/2 h-96">
        <div className="w-full h-full bg-stone-300 rounded-3xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-400 opacity-60"></div>
          <div className="relative w-32 h-32 border-2 border-stone-500 rounded-full opacity-40 transform rotate-12"></div>
        </div>
      </div>
    </section>
  );
};
