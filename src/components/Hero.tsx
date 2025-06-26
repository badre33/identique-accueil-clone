
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
      
      {/* Section image - logo Link sur fond blanc */}
      <div className="bg-white flex items-center justify-center relative min-h-[400px] lg:min-h-full overflow-hidden">
        <img 
          src="/lovable-uploads/f0a7c042-b0e0-48e5-9453-52ec37cbe21f.png" 
          alt="Link Agency Logo" 
          className="w-80 h-80 object-contain"
        />
      </div>
    </section>
  );
};
