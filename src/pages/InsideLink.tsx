import { useState, useEffect } from "react";
import { ArrowLeft, Target, Palette, Users, Lightbulb, Linkedin, History, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SideNavigation } from "@/components/inside-link/SideNavigation";
import { AnimatedStats } from "@/components/inside-link/AnimatedStats";
import { VisionSection } from "@/components/inside-link/VisionSection";
import { JoinTeamSection } from "@/components/inside-link/JoinTeamSection";
import { TypewriterText } from "@/components/inside-link/TypewriterText";
import { MagneticButton } from "@/components/inside-link/MagneticButton";
import { ParticleBackground } from "@/components/inside-link/ParticleBackground";
import { InteractiveBackground } from "@/components/inside-link/InteractiveBackground";
import { ThreeDHoverCard } from "@/components/inside-link/ThreeDHoverCard";
import { BrandingQuiz } from "@/components/inside-link/BrandingQuiz";
import { VirtualBusinessCard } from "@/components/inside-link/VirtualBusinessCard";
import { InteractiveTimeline } from "@/components/inside-link/InteractiveTimeline";
import { PersonalizedWelcome } from "@/components/inside-link/PersonalizedWelcome";
import { DynamicContent } from "@/components/inside-link/DynamicContent";
import { ScrollReveal } from "@/components/inside-link/ScrollReveal";
import { AnimatedCard } from "@/components/inside-link/AnimatedCard";
import { SectionTransition } from "@/components/inside-link/SectionTransition";
import { useParallax } from "@/hooks/useParallax";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const InsideLink = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const parallaxOffset = useParallax(0.3);
  const { playClickSound, playHoverSound } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'founders', 'skills', 'vision', 'stats', 'timeline', 'quiz', 'cards', 'mission', 'join'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsData = [
    {
      icon: Target,
      title: "Stratégie de Positionnement",
      description: "Nous analysons votre marché et définissons votre positionnement unique pour vous démarquer de la concurrence.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design & Identité Visuelle",
      description: "Création d'identités visuelles mémorables qui reflètent parfaitement l'essence de votre marque.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Créativité",
      description: "Approches créatives et innovations pour faire rayonner votre marque dans un monde saturé.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expérience Client",
      description: "Optimisation de chaque point de contact pour créer des expériences client exceptionnelles.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ParticleBackground />
      <InteractiveBackground />
      <SideNavigation currentSection={currentSection} />
      
      {/* Header avec navigation de retour */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <MagneticButton href="/" className="flex items-center space-x-3 text-black hover:text-gray-600 transition-colors duration-300">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-medium">Retour à l'accueil</span>
            </MagneticButton>
            <img 
              src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png" 
              alt="Link Agency Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <SectionTransition>
        <section id="hero" className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <ScrollReveal delay={200}>
              <PersonalizedWelcome />
            </ScrollReveal>
            
            <ScrollReveal delay={400} direction="fade">
              <h1 className="text-6xl lg:text-7xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
                Inside Link
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={600} direction="up">
              <div className="text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
                <TypewriterText 
                  text="Deux fondateurs. Une vision claire. Un seul objectif : bâtir des marques qui imposent le respect."
                  speed={30}
                  delay={1000}
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={800} direction="up">
              <div className="mt-12">
                <DynamicContent />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </SectionTransition>

      {/* Fondateurs Section */}
      <SectionTransition variant="slide">
        <section id="founders" className="py-32 px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Badreddine Harkaoui */}
              <ScrollReveal delay={200} direction="left">
                <AnimatedCard className="group" hoverScale={1.01} glowEffect>
                  <div className="relative mb-8 overflow-hidden rounded-3xl">
                    <img 
                      src="/lovable-uploads/da131874-d340-4dc9-b1e7-5fc5f24a0f40.png"
                      alt="Badreddine Harkaoui"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-30"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <MagneticButton 
                        href="https://www.linkedin.com/in/badreddine-harkaoui-nexiafiducia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        onClick={playClickSound}
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </MagneticButton>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-light mb-2 text-black">Badreddine Harkaoui</h2>
                      <p className="text-xl text-gray-600 font-light">Strategic Growth Architect – Ex-militaire. Serial Consultant. Brand Strategist.</p>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Badreddine est un architecte du positionnement.<br />
                      Ancien caporal dans les forces d'élite françaises, passé par la tech, l'entrepreneuriat et les stratégies de croissance au service de startups, institutions et grands comptes, il est aujourd'hui la force motrice derrière la direction stratégique de Link.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Target className="w-6 h-6 text-black transform hover:rotate-12 transition-transform duration-300 morph-icon" />
                        <span className="text-lg font-medium text-black">Expert en :</span>
                      </div>
                      <ul className="space-y-2 ml-9 text-gray-700">
                        <li className="hover:text-black transition-colors cursor-default">• stratégie de contenu à fort impact,</li>
                        <li className="hover:text-black transition-colors cursor-default">• campagnes de branding exécutif,</li>
                        <li className="hover:text-black transition-colors cursor-default">• transformation digitale et déploiement de projets complexes.</li>
                      </ul>
                    </div>
                    
                    <blockquote className="border-l-4 border-black pl-6 italic text-xl text-gray-800 font-light">
                      <TypewriterText 
                        text="Je ne construis pas des marques pour qu'elles plaisent. Je les construis pour qu'on ne puisse pas les ignorer."
                        speed={40}
                        delay={2000}
                      />
                    </blockquote>
                  </div>
                </AnimatedCard>
              </ScrollReveal>

              {/* Ayman Nejmi */}
              <ScrollReveal delay={400} direction="right">
                <AnimatedCard className="group" hoverScale={1.01} glowEffect>
                  <div className="relative mb-8 overflow-hidden rounded-3xl">
                    <img 
                      src="/lovable-uploads/d53262f8-9a1f-43dd-b2bc-b199945981c1.png"
                      alt="Ayman Nejmi"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-30"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <MagneticButton 
                        href="https://www.linkedin.com/in/ayman-nejmi-9926681a6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        onClick={playClickSound}
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </MagneticButton>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-light mb-2 text-black">Ayman Nejmi</h2>
                      <p className="text-xl text-gray-600 font-light">Creative Technologist – Designer. Coder. Esthète du branding.</p>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Ayman, c'est l'ingénieur du ressenti.<br />
                      Entre direction artistique, développement front-end et branding visuel, il incarne l'obsession du détail et du design qui frappe juste. Issu de l'univers produit et design system, il sait traduire une identité en interface, une stratégie en sensation.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Palette className="w-6 h-6 text-black transform hover:rotate-12 transition-transform duration-300 morph-icon" />
                        <span className="text-lg font-medium text-black">Spécialiste de :</span>
                      </div>
                      <ul className="space-y-2 ml-9 text-gray-700">
                        <li className="hover:text-black transition-colors cursor-default">• l'expérience utilisateur émotionnelle,</li>
                        <li className="hover:text-black transition-colors cursor-default">• l'identité visuelle cohérente,</li>
                        <li className="hover:text-black transition-colors cursor-default">• la fusion tech x branding.</li>
                      </ul>
                    </div>
                    
                    <blockquote className="border-l-4 border-black pl-6 italic text-xl text-gray-800 font-light">
                      <TypewriterText 
                        text="Une marque forte ne se dit pas belle. Elle se fait sentir, sans même parler."
                        speed={40}
                        delay={4000}
                      />
                    </blockquote>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* 3D Skills Section */}
      <SectionTransition variant="scale">
        <section id="skills" className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={200} direction="fade">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-light mb-6 text-black">
                  Nos Expertises
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des compétences complémentaires pour une approche holistique du branding
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.map((skill, index) => (
                <ScrollReveal key={index} delay={300 + index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <AnimatedCard hoverScale={1.03} hoverRotation={index % 2 === 0 ? -1 : 1}>
                    <ThreeDHoverCard {...skill} />
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </SectionTransition>

      <ScrollReveal delay={200}>
        <VisionSection />
      </ScrollReveal>
      
      <ScrollReveal delay={300}>
        <AnimatedStats />
      </ScrollReveal>

      {/* Interactive Timeline Section */}
      <SectionTransition>
        <section id="timeline" className="py-32 px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50 relative">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <History className="w-8 h-8 transform hover:rotate-12 transition-transform duration-300" />
                  <h2 className="text-5xl lg:text-6xl font-light">Notre Histoire</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Le parcours qui nous a menés à créer Link Agency
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <InteractiveTimeline />
            </ScrollReveal>
          </div>
        </section>
      </SectionTransition>

      {/* Branding Quiz Section */}
      <ScrollReveal delay={200}>
        <section id="quiz" className="py-32 px-8 lg:px-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-light mb-6 text-black">
                Découvrez Votre Type de Branding
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un quiz interactif pour identifier l'approche de branding qui vous correspond
              </p>
            </div>
            
            <BrandingQuiz />
          </div>
        </section>
      </ScrollReveal>

      {/* Virtual Business Cards Section */}
      <SectionTransition>
        <section id="cards" className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <Download className="w-8 h-8 transform hover:rotate-12 transition-transform duration-300" />
                  <h2 className="text-5xl lg:text-6xl font-light">Nos Contacts</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Téléchargez nos cartes de visite virtuelles pour rester en contact
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
              <ScrollReveal delay={300} direction="left">
                <AnimatedCard hoverScale={1.05}>
                  <VirtualBusinessCard
                    name="Badreddine Harkaoui"
                    title="Strategic Growth Architect"
                    image="/lovable-uploads/da131874-d340-4dc9-b1e7-5fc5f24a0f40.png"
                    linkedinUrl="https://www.linkedin.com/in/badreddine-harkaoui-nexiafiducia/"
                    email="bharkaoui@linkagency.ma"
                    phone="+212 610-061014"
                    whatsapp="+33745010714"
                    website="http://linkagency.ma/"
                  />
                </AnimatedCard>
              </ScrollReveal>
              
              <ScrollReveal delay={500} direction="right">
                <AnimatedCard hoverScale={1.05}>
                  <VirtualBusinessCard
                    name="Ayman Nejmi"
                    title="Creative Technologist"
                    image="/lovable-uploads/d53262f8-9a1f-43dd-b2bc-b199945981c1.png"
                    linkedinUrl="https://www.linkedin.com/in/ayman-nejmi-9926681a6/"
                    email="a.nejmi@linkagency.ma"
                    phone="+212 669-866831"
                    website="http://linkagency.ma/"
                  />
                </AnimatedCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Pourquoi Link Section */}
      <ScrollReveal delay={200}>
        <section id="mission" className="py-32 px-8 lg:px-16 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Lightbulb className="w-8 h-8 transform hover:rotate-12 transition-transform duration-300" />
                <h2 className="text-5xl lg:text-6xl font-light">Pourquoi nous avons fondé Link</h2>
              </div>
            </div>
            
            <div className="space-y-8 text-lg lg:text-xl leading-relaxed font-light">
              <p className="text-gray-300 transition-colors duration-500 hover:text-gray-200">
                Parce que nous étions fatigués de voir des marques fades, des identités génériques et des fondateurs brillants mal présentés.
              </p>
              <p className="text-gray-300 transition-colors duration-500 hover:text-gray-200">
                Parce qu'on voulait créer une agence différente : radicalement stratégique, obsessionnellement esthétique.
              </p>
              <p className="text-white text-xl lg:text-2xl font-normal">
                Une agence où la rigueur militaire croise le design, où l'exécution est un art, et où chaque client est traité comme une marque de demain.
              </p>
            </div>
            
            <div className="text-center mt-16">
              <MagneticButton 
                href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20découvrir%20votre%20approche%20et%20échanger%20sur%20mon%20projet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-500 text-lg font-medium hover:shadow-2xl hover:scale-105"
                onClick={playClickSound}
              >
                <Users className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <span>Rencontrer l'équipe</span>
              </MagneticButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <JoinTeamSection />
      </ScrollReveal>
      
      <FloatingContactWidget />
    </div>
  );
};

export default InsideLink;
