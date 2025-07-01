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

    try {
      const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${name.replace(/\s+/g, '_')}_LinkAgency.vcf`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      playClickSound();
      
      // Feedback visuel
      const button = document.querySelector(`[data-card="${name}"] .download-btn`);
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Téléchargé !';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement de la vCard:', error);
      // Fallback: copier les informations dans le presse-papier
      const contactInfo = `${name}\n${title}\nLink Agency\n${email}\n${phone}`;
      navigator.clipboard.writeText(contactInfo).then(() => {
        alert('Informations copiées dans le presse-papier !');
      }).catch(() => {
        alert('Veuillez télécharger manuellement les informations de contact.');
      });
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
        className="relative w-80 h-48 bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 hover:shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-gray-300 text-sm">{title}</p>
              <p className="text-gray-400 text-xs mt-1">Link Agency</p>
            </div>
            <img 
              src={image} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white/20 flex-shrink-0"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                onClick={playClickSound}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${email}`}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                onClick={playClickSound}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${phone}`}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                onClick={playClickSound}
              >
                <Phone className="w-4 h-4" />
              </a>
              {whatsapp && (
                <a 
                  href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
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
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  onClick={playClickSound}
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
            
            <button
              onClick={generateVCard}
              className="download-btn flex items-center space-x-1 bg-white text-black px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-xs font-medium"
            >
              <Download className="w-3 h-3" />
              <span>Télécharger</span>
            </button>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
      </div>
    </div>
  );
};
