
import { ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";

const Collaborations = () => {
  const collaborations = [
    {
      name: "Subway Maroc",
      url: "https://www.instagram.com/subwaymaroc/?hl=fr",
      category: "Restauration",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Subway-Logo.png"
    },
    {
      name: "SGTM Immobilier",
      url: "https://sgtm-immobilier.com/fr/accueil/",
      category: "Immobilier",
      logo: "https://sgtm-immobilier.com/wp-content/uploads/2019/10/logo-sgtm-immobilier.png"
    },
    {
      name: "Amoud",
      url: "https://www.amoud.ma/",
      category: "Commerce",
      logo: "https://www.amoud.ma/wp-content/uploads/2019/05/logo-amoud.png"
    },
    {
      name: "Achibest Food",
      url: "https://www.instagram.com/achibest_food/?hl=fr",
      category: "Restauration"
    },
    {
      name: "French Tech",
      url: "#",
      category: "Tech",
      logo: "https://www.lafrenchtech.com/wp-content/uploads/2019/06/french-tech-logo.png"
    },
    {
      name: "The Family",
      url: "https://www.thefamily.co/",
      category: "Startup Studio",
      logo: "https://www.thefamily.co/static/images/logo-black.svg"
    },
    {
      name: "Soulection",
      url: "https://soulection.com/",
      category: "Musique",
      logo: "https://soulection.com/images/soulection-logo.png"
    },
    {
      name: "Artitenium",
      url: "https://kzmfwv89vwbj1uf8kcxa.lite.vusercontent.net/",
      category: "Architecture d'intérieur"
    },
    {
      name: "DWP",
      url: "https://dwp.ma/",
      category: "Design d'intérieur"
    },
    {
      name: "Focus M",
      url: "https://focusm.ma/",
      category: "Écrans interactifs tactiles"
    },
    {
      name: "Secret Events",
      url: "https://www.instagram.com/secreteventss/",
      category: "Événementiel"
    },
    {
      name: "Umbra Festival",
      url: "https://www.instagram.com/umbra.dance/",
      category: "Événementiel"
    },
    {
      name: "Beyond Fears",
      url: "https://www.instagram.com/beyond__fears/?hl=fr",
      category: "Événementiel"
    },
    {
      name: "Casablanca Music Week",
      url: "https://guichet.com/ma-fr/event/producer/casablanca-music-week",
      category: "Événementiel"
    },
    {
      name: "Mom Corporation",
      url: "#",
      category: "Événement, Design & Marketing"
    },
    {
      name: "OK Daddy",
      url: "#",
      category: "Événementiel"
    },
    {
      name: "Épicerie Bordelaise",
      url: "#",
      category: "Restauration & Conférences musicales"
    }
  ];

  const categories = ["Restauration", "Immobilier", "Commerce", "Tech", "Startup Studio", "Musique", "Architecture d'intérieur", "Design d'intérieur", "Écrans interactifs", "Événementiel"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-24 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
              Nos collaborations
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              Des marques qui nous font confiance, des projets qui marquent les esprits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collaborations.map((collaboration, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {collaboration.logo && (
                      <div className="mb-3 flex items-center justify-center h-12">
                        <img 
                          src={collaboration.logo} 
                          alt={`${collaboration.name} logo`}
                          className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-black mb-2 group-hover:text-gray-800 transition-colors">
                      {collaboration.name}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                      {collaboration.category}
                    </span>
                  </div>
                  {collaboration.url !== "#" && (
                    <a 
                      href={collaboration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                </div>
                
                <div className="h-1 bg-gradient-to-r from-black to-gray-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 font-light mb-8">
              Secteurs d'expertise : {categories.slice(0, 6).join(", ")} et plus encore.
            </p>
            <a 
              href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20découvrir%20vos%20références%20et%20échanger%20sur%20mon%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-2xl"
            >
              <span>Rejoindre nos collaborations</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
