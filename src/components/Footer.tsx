import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Link Agency</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
              Cabinet conseil en performance digitale au Maroc. Nous accompagnons les directions marketing des banques, assurances, retail et industrie dans la conception de stratégies mesurables.
            </p>
            <a 
              href="https://maps.app.goo.gl/q3xLY5gy8cY6U6Tj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm mb-4"
            >
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Casablanca · Marrakech · Maroc</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer_brand")}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Discuter sur WhatsApp
            </a>
          </div>

          {/* Pilier Stratégie & Marque */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Stratégie & Marque
            </h3>
            <ul className="space-y-2">
              <li><Link to="/branding" className="text-gray-300 hover:text-white transition-colors text-sm">Branding & Identité</Link></li>
              <li><Link to="/conseil-strategique" className="text-gray-300 hover:text-white transition-colors text-sm">Conseil stratégique</Link></li>
              <li><Link to="/personal-branding" className="text-gray-300 hover:text-white transition-colors text-sm">Personal branding</Link></li>
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-6 mb-4">
              Influence & Événementiel
            </h3>
            <ul className="space-y-2">
              <li><Link to="/evenementiel" className="text-gray-300 hover:text-white transition-colors text-sm">Événementiel corporate</Link></li>
              <li><Link to="/influence-marketing" className="text-gray-300 hover:text-white transition-colors text-sm">Influence marketing</Link></li>
            </ul>
          </div>

          {/* Pilier Performance Digitale */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Performance Digitale
            </h3>
            <ul className="space-y-2">
              <li><Link to="/marketing-digital" className="text-gray-300 hover:text-white transition-colors text-sm">Marketing digital</Link></li>
              <li><Link to="/social-media" className="text-gray-300 hover:text-white transition-colors text-sm">Social media</Link></li>
              <li><Link to="/content-digital" className="text-gray-300 hover:text-white transition-colors text-sm">Content digital</Link></li>
              <li><Link to="/developpement-web" className="text-gray-300 hover:text-white transition-colors text-sm">Développement web</Link></li>
              <li><Link to="/analytics" className="text-gray-300 hover:text-white transition-colors text-sm">Analytics</Link></li>
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-6 mb-4">
              Découvrir
            </h3>
            <ul className="space-y-2">
              <li><Link to="/etudes-de-cas" className="text-gray-300 hover:text-white transition-colors text-sm">Études de cas</Link></li>
              <li><Link to="/secteurs" className="text-gray-300 hover:text-white transition-colors text-sm">Secteurs</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/inside-link" className="text-gray-300 hover:text-white transition-colors text-sm">Inside Link</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("footer_contact")}
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+212699024526" 
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+212 6 99 02 45 26</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bharkaoui@linkagency.ma" 
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center space-x-2"
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
              <strong className="text-gray-300">Link Agency</strong> — <strong className="text-gray-300">cabinet conseil marketing digital Maroc</strong> et <strong className="text-gray-300">agence communication Casablanca</strong>. Nous accompagnons les directions marketing dans la conception de stratégies mesurables : <strong className="text-gray-300">social media Maroc</strong>, <strong className="text-gray-300">production vidéo</strong>, <strong className="text-gray-300">campagnes Meta & Google Ads</strong>, <strong className="text-gray-300">événementiel corporate</strong>.
            </p>
            <p className="mb-3">
              Notre studio interne conçoit les dispositifs éditoriaux et publicitaires de secteurs exigeants : <Link to="/secteurs" className="text-gray-300 underline hover:text-white">banque, assurance, retail, e-commerce, industrie et services B2B</Link>. Nous combinons <strong className="text-gray-300">community management Casablanca</strong>, contenus bilingues FR/AR/Darija, reporting et optimisation continue du ROI.
            </p>
            <p>
              <strong className="text-gray-300">Cabinet conseil marketing banque & assurance Maroc</strong>, Link Agency accompagne plus de 50 clients à travers 200+ projets. De la stratégie à l'exécution, nous pilotons des dispositifs cohérents, mesurables et alignés sur vos enjeux business.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Link Agency. Tous droits réservés. · La stratégie marketing qui génère vos leads.
          </p>
        </div>
      </div>
    </footer>
  );
};
