
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Clock,
      value: 8,
      suffix: '+',
      label: 'Années d\'expérience',
      description: 'Au service des directions marketing et communication',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: 'Projets réalisés',
      description: 'Pour des marques établies et des groupes de référence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Secteurs d\'activité',
      description: 'Banque, assurance, retail, industrie, e-commerce et plus',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      value: 50,
      suffix: '+',
      label: 'Clients accompagnés',
      description: 'Avec une logique de pilotage, de reporting et de performance',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCurrentValue(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    return (
      <span className="text-4xl lg:text-5xl font-light">
        {currentValue}{suffix}
      </span>
    );
  };

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light mb-6 text-black">
            Notre track record
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des chiffres qui reflètent la maturité de notre positionnement et la solidité de nos références
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
