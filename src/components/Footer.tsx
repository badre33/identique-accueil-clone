import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Link Agency</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Agence digitale basée à Casablanca, partenaire des marques établies au Maroc. Stratégie, contenu, performance et événements corporate pilotés en studio.
            </p>
            <a 
              href="https://maps.app.goo.gl/q3xLY5gy8cY6U6Tj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm mb-2"
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Maroc × France</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/branding" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Branding & Identité
                </Link>
              </li>
              <li>
                <Link to="/evenementiel" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Événementiel Corporate
                </Link>
              </li>
              <li>
                <Link to="/influence-marketing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Influence Marketing
                </Link>
              </li>
              <li>
                <Link to="/marketing-digital" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/developpement-web" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link to="/conseil-strategique" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Conseil Stratégique
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/collaborations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nos Collaborations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/inside-link" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inside Link
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+212699024526" 
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+212 6 99 02 45 26</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bharkaoui@linkagency.ma" 
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>bharkaoui@linkagency.ma</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Rich Text Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-xs text-gray-400 leading-relaxed">
            <p className="mb-3">
              <strong className="text-gray-400">Link Agency</strong> - <strong className="text-gray-400">agence digitale Maroc</strong> et <strong className="text-gray-400">agence communication Casablanca</strong> au service des directions marketing de marques établies. 
              Nous intervenons sur le <strong className="text-gray-400">social media Maroc</strong>, la <strong className="text-gray-400">production vidéo Maroc</strong>, les <strong className="text-gray-400">campagnes Meta Ads Maroc</strong> et l'<strong className="text-gray-400">événementiel corporate Maroc</strong>.
            </p>
            <p className="mb-3">
              Notre studio interne conçoit les dispositifs éditoriaux et publicitaires de secteurs exigeants : banque, assurance, retail, e-commerce, industrie et services B2B. 
              Nous combinons <strong className="text-gray-400">community management Casablanca</strong>, contenus bilingues FR/AR/Darija, reporting et optimisation continue du ROI.
            </p>
            <p>
              <strong className="text-gray-400">Agence marketing banque assurance Maroc</strong>, nous accompagnons plus de 50 clients à travers 200+ projets. 
              De la stratégie à l'exécution, Link Agency pilote des dispositifs cohérents, mesurables et alignés sur les enjeux business de ses clients.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Link Agency. Tous droits réservés. | Stratégie. Contenu. Performance.
          </p>
        </div>
      </div>
    </footer>
  );
};
