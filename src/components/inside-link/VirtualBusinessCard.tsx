import React, { useRef } from 'react';
import { Download, Linkedin, Mail, Phone, MessageCircle, Globe } from 'lucide-react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface VirtualBusinessCardProps {
  name: string;
  title: string;
  image: string;
  linkedinUrl: string;
  email: string;
  phone: string;
  whatsapp?: string;
  website?: string;
}

export const VirtualBusinessCard = ({ 
  name, 
  title, 
  image, 
  linkedinUrl, 
  email, 
  phone, 
  whatsapp,
  website 
}: VirtualBusinessCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { playClickSound } = useSoundEffects();

  const generateVCard = () => {
    console.log('=== DÉBUT GÉNÉRATION VCARD ===');
    console.log('Navigateur:', navigator.userAgent);
    console.log('Générant vCard pour:', name);
    
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:Link Agency
TITLE:${title}
EMAIL:${email}
TEL:${phone}
URL:${website || linkedinUrl}
NOTE:${title} chez Link Agency - Expert en branding et stratégie digitale
END:VCARD`;

    console.log('Contenu vCard généré:', vcard);
    
    // Méthode 1: Téléchargement direct
    try {
      console.log('Tentative méthode 1: Blob + createObjectURL');
      const blob = new Blob([vcard], { type: 'text/vcard' });
      console.log('Blob créé:', blob.size, 'bytes');
      
      const url = URL.createObjectURL(blob);
      console.log('URL créée:', url);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name.replace(/\s+/g, '_')}_LinkAgency.vcf`;
      link.style.display = 'none';
      
      console.log('Lien créé, nom de fichier:', link.download);
      
      document.body.appendChild(link);
      console.log('Lien ajouté au DOM');
      
      link.click();
      console.log('Click simulé sur le lien');
      
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        console.log('Nettoyage effectué');
      }, 100);
      
      playClickSound();
      console.log('=== TÉLÉCHARGEMENT INITIÉ ===');
      return;
      
    } catch (error) {
      console.error('Erreur méthode 1:', error);
    }
    
    // Méthode 2: Data URL
    try {
      console.log('Tentative méthode 2: Data URL');
      const dataUrl = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
      console.log('Data URL créée');
      
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${name.replace(/\s+/g, '_')}_LinkAgency.vcf`;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      playClickSound();
      console.log('=== TÉLÉCHARGEMENT MÉTHODE 2 INITIÉ ===');
      return;
      
    } catch (error) {
      console.error('Erreur méthode 2:', error);
    }
    
    // Fallback: Copier dans le presse-papier
    console.log('Fallback: copie dans le presse-papier');
    const contactInfo = `${name}
${title}
Link Agency
Email: ${email}
Téléphone: ${phone}
Site web: ${website || linkedinUrl}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(contactInfo).then(() => {
        alert('Impossible de télécharger le fichier. Les informations de contact ont été copiées dans le presse-papier.');
        console.log('Informations copiées dans le presse-papier');
      }).catch(() => {
        alert(`Voici les informations de contact à copier manuellement:\n\n${contactInfo}`);
        console.log('Affichage manuel des informations');
      });
    } else {
      alert(`Voici les informations de contact à copier manuellement:\n\n${contactInfo}`);
      console.log('Affichage manuel des informations (pas de clipboard API)');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div className="group" data-card={name}>
      <div
        ref={cardRef}
        className="relative w-80 h-48 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 hover:shadow-2xl border border-gray-700"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold mb-1 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter contrast-125">{name}</h3>
              <p className="text-gray-100 text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{title}</p>
              <p className="text-gray-200 text-xs mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Link Agency</p>
            </div>
            <img 
              src={image} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white/30 flex-shrink-0 shadow-lg"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/15 backdrop-blur-sm rounded-lg hover:bg-white/25 transition-colors border border-white/20"
                onClick={playClickSound}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/15 backdrop-blur-sm rounded-lg hover:bg-white/25 transition-colors border border-white/20"
                onClick={playClickSound}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/15 backdrop-blur-sm rounded-lg hover:bg-white/25 transition-colors border border-white/20"
                onClick={playClickSound}
              >
                <Phone className="w-4 h-4" />
              </a>
              {whatsapp && (
                <a 
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/15 backdrop-blur-sm rounded-lg hover:bg-white/25 transition-colors border border-white/20"
                  onClick={playClickSound}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
              {website && (
                <a 
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/15 backdrop-blur-sm rounded-lg hover:bg-white/25 transition-colors border border-white/20"
                  onClick={playClickSound}
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
            
            <button
              onClick={generateVCard}
              className="download-btn flex items-center space-x-1 bg-white text-black px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 text-xs font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-3 h-3" />
              <span>Télécharger</span>
            </button>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
      </div>
    </div>
  );
};
