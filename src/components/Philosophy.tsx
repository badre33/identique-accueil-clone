
export const Philosophy = () => {
  return (
    <section className="py-32 px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Fond décoratif avec le logo en arrière-plan */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-5 animate-pulse">
        <img 
          src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png" 
          alt="Link Logo Background" 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      {/* Éléments décoratifs supplémentaires */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-gradient-to-br from-black to-gray-600 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      
      <div className="max-w-4xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-8 animate-fade-in">
          Une marque ne s'impose pas,
          <br />
          <span className="text-gray-600 hover:text-black transition-colors duration-500">elle inspire.</span>
        </h2>
        <div className="w-24 h-1 bg-black transform origin-left hover:scale-x-150 transition-transform duration-500"></div>
        
        {/* Citation supplémentaire */}
        <div className="mt-16 max-w-2xl">
          <p className="text-xl text-gray-600 font-light leading-relaxed italic">
            "Chaque interaction avec votre marque est une opportunité de créer une connexion émotionnelle durable avec votre audience."
          </p>
        </div>
      </div>
    </section>
  );
};
