
export const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-100 grid grid-cols-1 lg:grid-cols-2">
      {/* Section texte */}
      <div className="p-16 lg:p-24 flex flex-col justify-center bg-gray-50">
        <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-gray-900">
          À propos de Link
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-md">
          Link Agency conçoit des solutions 
          stratégiques, chaque point de 
          contact devient une opportunité 
          d'engager et d'inspirer.
        </p>
      </div>
      
      {/* Section image */}
      <div className="bg-gray-300 flex items-center justify-center relative">
        <div className="w-64 h-32 bg-gray-400 rounded-full opacity-60"></div>
        <div className="absolute w-48 h-24 bg-gray-500 rounded-full opacity-40 translate-x-8 translate-y-4"></div>
      </div>
    </section>
  );
};
