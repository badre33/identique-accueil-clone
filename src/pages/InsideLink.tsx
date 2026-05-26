import { SEOHead } from "@/components/SEOHead";
import { generatePersonBadreSchema } from "@/utils/structuredData";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { ArrowLeft, Target, Palette, Users, Lightbulb, Linkedin, History, LineChart, Search, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SideNavigation } from "@/components/inside-link/SideNavigation";
import TeamShowcase from "@/components/inside-link/TeamShowcase";
import NetworkSection from "@/components/inside-link/NetworkSection";
import { AnimatedStats } from "@/components/inside-link/AnimatedStats";
import { VisionSection } from "@/components/inside-link/VisionSection";
import { JoinTeamSection } from "@/components/inside-link/JoinTeamSection";
import { TypewriterText } from "@/components/inside-link/TypewriterText";
import { MagneticButton } from "@/components/inside-link/MagneticButton";
import { ParticleBackground } from "@/components/inside-link/ParticleBackground";
import { InteractiveBackground } from "@/components/inside-link/InteractiveBackground";
import { ThreeDHoverCard } from "@/components/inside-link/ThreeDHoverCard";
import { EnhancedTimeline } from "@/components/inside-link/EnhancedTimeline";
import { GameifiedBrandingQuiz } from "@/components/inside-link/GameifiedBrandingQuiz";
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
      icon: LineChart,
      title: "Pilotage P&L Digital",
      description: "Attribution multi-touch, RevOps et orchestration de la performance commerciale. Chaque dirham investi devient un actif mesurable.",
      gradient: "from-slate-700 to-slate-900"
    },
    {
      icon: Target,
      title: "Acquisition & Lead Generation",
      description: "Meta · Google · TikTok · LinkedIn Ads avec lead scoring qualifié, spécialisation banque, assurance et crédit consommation.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "SEO Trilingue FR · AR · Darija",
      description: "Référencement naturel bilingue français-arabe avec expertise rare au Maroc, capable de générer 20 à 30 % de croissance organique.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Branding & Identité Visuelle",
      description: "Création d'identités de marque mémorables et systèmes de design cohérents, du démarrage d'une marque à la refonte d'enseignes établies.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "UX/UI & CRO",
      description: "Conception de parcours de conversion, A/B testing systématique et design system pour transformer le trafic en leads qualifiés.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users,
      title: "CRM & Marketing Automation",
      description: "Intégration CRM, WhatsApp Business et automation pour boucler la chaîne lead → call center → closing en moins d'une heure.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-16 sm:pt-20">
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(generatePersonBadreSchema())}
          </script>
        </Helmet>
      <SEOHead
        title="Inside Link Agency - Notre Équipe & Vision | Agence Marketing Maroc"
        description="Découvrez l'équipe et la vision de Link Agency, agence digitale à Casablanca. 11 ans d'expérience, 200+ projets, une approche stratégique dédiée aux marques au Maroc au Maroc."
        keywords="link agency casablanca, agence digitale maroc, équipe senior casablanca, stratégie marque maroc"
        url="https://linkagency.ma/inside-link"
      />
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
              width={120}
              height={48}
              className="h-12 w-auto max-w-[120px] shrink-0 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <SectionTransition>
        <section id="hero" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative pattern-waves">
          <div className="absolute inset-0 pattern-grid opacity-50"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10 space-section">
            <ScrollReveal delay={200}>
              <PersonalizedWelcome />
            </ScrollReveal>
            
            <ScrollReveal delay={400} direction="fade">
              <h1 className="gradient-primary bg-clip-text text-transparent animate-pulse-subtle">
                Inside Link
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={600} direction="up">
              <div className="text-2xl lg:text-3xl text-neutral-600 leading-relaxed max-w-4xl mx-auto font-light">
                 <TypewriterText 
                   text="Un fondateur. Une vision : transformer chaque dirham marketing en performance commerciale mesurable pour les marques au Maroc au Maroc."
                  speed={30}
                  delay={1000}
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={800} direction="up">
              <div className="mt-16">
                <DynamicContent />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </SectionTransition>

      {/* Fondateur Section */}
      <SectionTransition variant="slide">
        <section id="founders" className="section-padding relative pattern-dots">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-20">
              
              {/* Badreddine Harkaoui */}
              <ScrollReveal delay={200} direction="left">
                <AnimatedCard className="group card-elevated" hoverScale={1.01} glowEffect>
                  <div className="relative mb-10 overflow-hidden rounded-3xl">
                    <img 
                      src="/lovable-uploads/da131874-d340-4dc9-b1e7-5fc5f24a0f40.png"
                      alt="Badreddine Harkaoui"
                      className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-30"></div>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <MagneticButton 
                        href="https://www.linkedin.com/in/badreddine-harkaoui-nexiafiducia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 interactive-button"
                        onClick={playClickSound}
                      >
                        <Linkedin className="w-6 h-6 text-blue-600" />
                      </MagneticButton>
                    </div>
                  </div>
                  
                  <div className="space-content">
                    <div className="space-tight">
                      <h2 className="text-neutral-900 mb-3">Badreddine Harkaoui</h2>
                      <p className="text-xl text-neutral-500 font-light">Fondateur &amp; Strategic Growth Architect. Expert en stratégie 360°, pilotage performance et orchestration commerciale.</p>
                    </div>
                    
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Badreddine est l'architecte de la performance commerciale de Link Agency.<br />
                      Plus de 11 ans d'expérience auprès de marques marocaines de tous secteurs (services, retail, industrie, e-commerce, finance), aux côtés desquelles il a piloté des dispositifs 360° qui alignent branding, contenu, paid et événementiel sur un même objectif business.
                    </p>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Ancien caporal des forces d'élite françaises (engagé en 2007), passé par la tech, le conseil stratégique, la croissance B2B et B2C et un cabinet fiduciaire de référence, il a forgé une conviction simple : on ne fait pas du branding pour faire du branding, ni des posts pour faire des posts. Tout part d'une stratégie. Chaque création, chaque campagne, chaque événement sert l'image de marque ET la performance commerciale.
                    </p>

                    <div className="space-tight">
                      <div className="flex items-center space-x-4">
                        <Users className="w-7 h-7 text-black" />
                        <span className="text-lg font-medium text-neutral-800">Quelques marques accompagnées :</span>
                      </div>
                      <p className="text-lg text-neutral-600 leading-relaxed ml-11">
                        L'Bankalik (Attijariwafa Bank), AXA Assurance Maroc, RMA, Nexia, SGTM Immobilier, Subway Maroc, YouCan, Oncovita, La Maison Amoud, Achibest Food, Soulection, Artitenium, DWP, Focus M, Secret Events, Umbra Festival, Casablanca Music Week, Mom Corporation, OK Daddy, Épicerie Bordelaise, OCB Maroc, Edwin, et bien d'autres marques marocaines et internationales sur des dispositifs branding, contenu, performance, événementiel et personal branding.
                      </p>
                    </div>

                    <div className="space-tight">
                      <div className="flex items-center space-x-4">
                        <Target className="w-7 h-7 text-black transform hover:rotate-12 transition-transform duration-300 morph-icon" />
                        <span className="text-lg font-medium text-neutral-800">Expertises stratégiques :</span>
                      </div>
                      <ul className="space-y-3 ml-11 text-neutral-600">
                        <li className="hover:text-neutral-800 transition-colors cursor-default">• Stratégie de marque 360° et plateforme de positionnement,</li>
                        <li className="hover:text-neutral-800 transition-colors cursor-default">• Branding, identité visuelle et direction artistique,</li>
                        <li className="hover:text-neutral-800 transition-colors cursor-default">• Pilotage P&amp;L digital, attribution et orchestration des canaux,</li>
                        <li className="hover:text-neutral-800 transition-colors cursor-default">• Acquisition payante, social media et lead generation,</li>
                        <li className="hover:text-neutral-800 transition-colors cursor-default">• Activations, événements et déploiement opérationnel de dispositifs complexes.</li>
                      </ul>
                    </div>
                    
                    <blockquote className="border-l-4 border-black pl-8 italic text-xl text-neutral-700 font-light">
                      <TypewriterText 
                        text="Je ne livre pas des campagnes. Je livre des dispositifs qui transforment chaque dirham investi en performance commerciale mesurable."
                        speed={40}
                        delay={2000}
                      />
                    </blockquote>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Notre équipe — 10 pôles d'expertise */}
      <ScrollReveal delay={200}>
        <TeamShowcase />
      </ScrollReveal>

      {/* Réseau Maroc — partenaires sélectionnés */}
      <ScrollReveal delay={200}>
        <NetworkSection />
      </ScrollReveal>

      {/* 3D Skills Section */}
      <SectionTransition variant="scale">
        <section id="skills" className="section-padding gradient-subtle relative pattern-diagonal">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={200} direction="fade">
              <div className="text-center mb-20 space-content">
                <h2 className="text-neutral-900 mb-8">
                  Nos Expertises
                </h2>
                <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                  Des compétences complémentaires pour une approche holistique du branding
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

      {/* Enhanced Interactive Timeline Section */}
      <SectionTransition>
        <section id="timeline" className="section-padding gradient-subtle relative pattern-waves">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="text-center mb-20 space-content">
                <div className="flex items-center justify-center space-x-4 mb-10">
                  <History className="w-10 h-10 transform hover:rotate-12 transition-transform duration-300" />
                  <h2 className="text-neutral-900">Notre Histoire</h2>
                </div>
                <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                  Le parcours qui nous a menés à créer Link Agency
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <EnhancedTimeline />
            </ScrollReveal>
          </div>
        </section>
      </SectionTransition>

      {/* Gamified Branding Quiz Section */}
      <ScrollReveal delay={200}>
        <section id="quiz" className="section-padding relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 space-content">
              <h2 className="text-neutral-900 mb-8">
                Testez Vos Connaissances en Branding
              </h2>
              <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                Un quiz interactif et ludique pour découvrir votre niveau en branding
              </p>
            </div>
            
            <GameifiedBrandingQuiz />
          </div>
        </section>
      </ScrollReveal>

      {/* Pourquoi Link Section */}
      <ScrollReveal delay={200}>
        <section id="mission" className="section-padding bg-black text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Lightbulb className="w-10 h-10 text-white transform hover:rotate-12 transition-transform duration-300" />
                <h2 className="text-white text-4xl lg:text-5xl font-light">Pourquoi j'ai fondé Link</h2>
              </div>
            </div>
            
            <div className="space-y-8 text-lg lg:text-xl leading-relaxed font-light max-w-4xl mx-auto">
              <p className="text-gray-100 text-center">
                Parce que j'étais fatigué de voir des marques fades, des identités génériques et des fondateurs brillants mal présentés.
              </p>
              <p className="text-gray-100 text-center">
                Parce que je voulais créer une agence différente : radicalement stratégique, obsessionnellement esthétique.
              </p>
              <p className="text-white text-xl lg:text-2xl font-normal text-center mt-12">
                Une agence où la rigueur militaire croise le design, où l'exécution est un art, et où chaque client est traité comme une marque de demain. Puis j'ai structuré l'équipe qui me permet aujourd'hui de tenir cette promesse.
              </p>
            </div>
            
            <div className="text-center mt-16">
              <MagneticButton 
                href="https://wa.me/212699024526?text=Bonjour%2C%20j'aimerais%20découvrir%20votre%20approche%20et%20échanger%20sur%20mon%20projet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-10 py-5 rounded-full text-lg font-medium hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                onClick={playClickSound}
              >
                <Users className="w-6 h-6" />
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
