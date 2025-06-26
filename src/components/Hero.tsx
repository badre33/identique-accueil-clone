
export const Hero = () => {
  return (
    <section className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2">
      {/* Section texte */}
      <div className="p-8 lg:p-16 flex flex-col justify-center">
        <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
          À propos de Link
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed max-w-lg font-light">
          Link Agency conçoit des solutions 
          stratégiques, chaque point de 
          contact devient une opportunité 
          d'engager et d'inspirer.
        </p>
      </div>
      
      {/* Section image */}
      <div className="bg-gray-100 flex items-center justify-center relative min-h-[400px] lg:min-h-full">
        <img 
          src="/lovable-uploads/c2c2bc5c-1a2d-4fdd-a6ac-9d3a8d13ac23.png" 
          alt="Link Agency Logo" 
          className="w-64 h-64 object-contain"
        />
      </div>
    </section>
  );
};
