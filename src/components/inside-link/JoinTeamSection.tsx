
import { Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

export const JoinTeamSection = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Discussion WhatsApp',
      description: 'Échangeons de vive voix sur vos projets',
      action: 'Démarrer la conversation',
      href: 'https://wa.me/33745010714?text=Bonjour%2C%20j\'aimerais%20découvrir%20votre%20approche%20et%20échanger%20sur%20mon%20projet',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Direct',
      description: 'Présentez-nous votre projet par écrit',
      action: 'Envoyer un email',
      href: 'mailto:bharkaoui@linkagency.ma?subject=Collaboration%20-%20Découverte%20de%20votre%20approche',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Rendez-vous Stratégique',
      description: 'Planifions un call de 30 minutes',
      action: 'Réserver un créneau',
      href: 'https://calendly.com/b-harkaoui-linkagency/30min',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="join" className="py-32 px-8 lg:px-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">
            Prêt à Construire Quelque Chose d'Exceptionnel ?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Que vous soyez une startup ambitieuse ou une entreprise établie, nous sommes là pour transformer votre vision en réalité marquante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gray-200 transition-colors">
                  {option.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <div className="flex items-center text-white group-hover:text-gray-200 transition-colors">
                  <span className="font-medium mr-2">{option.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">
            Ou retrouvez-nous sur nos réseaux professionnels
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/badreddine-harkaoui-nexiafiducia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn - Badreddine
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="https://www.linkedin.com/in/ayman-nejmi-9926681a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn - Ayman
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
