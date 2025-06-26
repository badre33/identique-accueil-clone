
export const Philosophy = () => {
  return (
    <section className="py-32 px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Fond décoratif avec le logo en arrière-plan */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-5">
        <img 
          src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png" 
          alt="Link Logo Background" 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      <div className="max-w-4xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8">
          Une marque ne s'impose pas,
          <br />
          <span className="text-gray-600">elle inspire.</span>
        </h2>
        <div className="w-24 h-1 bg-black"></div>
      </div>
    </section>
  );
};
