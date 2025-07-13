import { ArrowRight, Zap, Target, TrendingUp, Users, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// CTAs optimisés pour différentes sections
export const OptimizedCTAs = {
  // CTA principal avec urgence
  PrimaryCTA: ({ 
    title = "Transformez votre marque dès aujourd'hui",
    subtitle = "Rejoignez plus de 150 entreprises qui nous font confiance",
    ctaText = "Démarrer mon projet",
    urgencyText = "Consultation gratuite - Réponse sous 24h",
    link = "/#contact"
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              to={link}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg group transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Zap className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'rotate-12' : ''}`} />
              {ctaText}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <Clock className="w-4 h-4" />
            {urgencyText}
          </div>
        </div>
      </div>
    );
  },

  // CTA avec preuve sociale
  SocialProofCTA: ({ 
    title = "Rejoignez 150+ entreprises satisfaites",
    stats = [
      { value: "4.9/5", label: "Satisfaction client" },
      { value: "98%", label: "Recommandation" },
      { value: "24h", label: "Délai de réponse" }
    ],
    ctaText = "Obtenir mon devis gratuit",
    link = "/#contact"
  }) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-semibold text-foreground mb-6">
        {title}
      </h3>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <Link 
        to={link}
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium group"
      >
        <Target className="w-4 h-4" />
        {ctaText}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  ),

  // CTA avec bénéfices
  BenefitsCTA: ({ 
    title = "Pourquoi choisir Link Agency ?",
    benefits = [
      "Expertise locale Maroc depuis 11 ans",
      "Équipe 100% dédiée à votre succès", 
      "Résultats mesurables et ROI prouvé",
      "Support continu post-livraison"
    ],
    ctaText = "Découvrir nos services",
    link = "/#services"
  }) => (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
        {title}
      </h3>
      
      <div className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-muted-foreground">{benefit}</span>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Link 
          to={link}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium group"
        >
          <Users className="w-4 h-4" />
          {ctaText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  ),

  // CTA d'urgence avec scarcité
  UrgencyCTA: ({ 
    title = "Offre limitée : Audit gratuit",
    subtitle = "Seulement 5 places disponibles ce mois-ci",
    features = [
      "Analyse complète de votre marque",
      "Recommandations personnalisées", 
      "Plan d'action détaillé",
      "Suivi pendant 1 mois"
    ],
    originalPrice = "2500 MAD",
    currentPrice = "Gratuit",
    ctaText = "Réserver ma place",
    urgencyText = "Plus que 2 places disponibles",
    link = "/#contact"
  }) => (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 text-center relative">
      {/* Badge urgence */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Offre limitée
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mt-4 mb-4">
        {title}
      </h3>
      <p className="text-red-600 font-medium mb-6">
        {subtitle}
      </p>
      
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-xl text-gray-400 line-through">{originalPrice}</span>
          <span className="text-3xl font-bold text-green-600">{currentPrice}</span>
        </div>
        
        <div className="space-y-2 text-left mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Link 
        to={link}
        className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-colors font-semibold text-lg mb-4 group transform hover:scale-105"
      >
        <TrendingUp className="w-5 h-5" />
        {ctaText}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <p className="text-sm text-red-600 font-medium">
        ⏰ {urgencyText}
      </p>
    </div>
  ),

  // CTA contact direct
  ContactCTA: ({ 
    title = "Parlons de votre projet",
    subtitle = "Notre équipe est à votre écoute pour concrétiser vos ambitions",
    phone = "+212 6XX XXX XXX",
    email = "contact@linkagency.ma",
    ctaText = "Prendre rendez-vous",
    link = "/#contact"
  }) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
        {title}
      </h3>
      <p className="text-muted-foreground text-center mb-8">
        {subtitle}
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 justify-center">
          <Phone className="w-5 h-5 text-primary" />
          <a href={`tel:${phone}`} className="text-primary hover:underline font-medium">
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Mail className="w-5 h-5 text-primary" />
          <a href={`mailto:${email}`} className="text-primary hover:underline font-medium">
            {email}
          </a>
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          to={link}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium group w-full justify-center"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          {ctaText}
        </Link>
      </div>
    </div>
  )
};