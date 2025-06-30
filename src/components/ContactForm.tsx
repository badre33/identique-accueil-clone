
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin, Clock, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email non valide'),
  telephone: z.string().min(8, 'Numéro de téléphone trop court'),
  entreprise: z.string().optional(),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
  delai: z.string().optional(),
  countryCode: z.string()
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Branding & Identité visuelle',
  'Événementiel',
  'Personal Branding',
  'Content Digital',
  'Stratégie de communication',
  'Autre'
];

const budgets = [
  'Moins de 5 000€',
  '5 000€ - 15 000€',
  '15 000€ - 30 000€',
  '30 000€ - 50 000€',
  'Plus de 50 000€',
  'À définir ensemble'
];

const delais = [
  'Urgent (moins de 2 semaines)',
  '1 mois',
  '2-3 mois',
  '3-6 mois',
  'Plus de 6 mois',
  'Flexible'
];

const countryCodes = [
  { code: '+212', country: 'Maroc', flag: '🇲🇦' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+1', country: 'États-Unis/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'Royaume-Uni', flag: '🇬🇧' },
  { code: '+49', country: 'Allemagne', flag: '🇩🇪' },
  { code: '+39', country: 'Italie', flag: '🇮🇹' },
  { code: '+34', country: 'Espagne', flag: '🇪🇸' },
  { code: '+32', country: 'Belgique', flag: '🇧🇪' },
  { code: '+41', country: 'Suisse', flag: '🇨🇭' },
  { code: '+31', country: 'Pays-Bas', flag: '🇳🇱' }
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      entreprise: '',
      service: '',
      budget: '',
      message: '',
      delai: '',
      countryCode: '+212'
    }
  });

  const { watch, formState: { errors } } = form;
  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const message = `🚀 NOUVEAU PROJET - Link Agency

👤 Contact:
- Nom: ${data.nom} ${data.prenom}
- Email: ${data.email}
- Téléphone: ${data.countryCode} ${data.telephone}
- Entreprise: ${data.entreprise || 'Non renseignée'}

📋 Projet:
- Service souhaité: ${data.service}
- Budget estimé: ${data.budget || 'Non renseigné'}
- Délai souhaité: ${data.delai || 'Non renseigné'}

💬 Message:
${data.message}`;

    const whatsappUrl = `https://wa.me/33745010714?text=${encodeURIComponent(message)}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous répondrons dans les 24h. Vous allez être redirigé vers WhatsApp.",
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  const getFieldIcon = (fieldName: keyof FormData, value: string) => {
    if (!value) return null;
    const hasError = errors[fieldName];
    return hasError ? (
      <AlertCircle className="w-5 h-5 text-red-400" />
    ) : (
      <Check className="w-5 h-5 text-green-400" />
    );
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-light text-white mb-4">Message envoyé !</h3>
        <p className="text-gray-300 max-w-md">
          Merci pour votre message. Notre équipe vous contactera dans les 24h. 
          Vous allez être redirigé vers WhatsApp pour poursuivre la conversation.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      placeholder="Nom *"
                      className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors pr-8"
                    />
                  </FormControl>
                  <div className="absolute right-0 top-0">
                    {getFieldIcon('nom', field.value)}
                  </div>
                </div>
                <FormMessage className="text-red-400 text-sm mt-1" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      placeholder="Prénom *"
                      className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors pr-8"
                    />
                  </FormControl>
                  <div className="absolute right-0 top-0">
                    {getFieldIcon('prenom', field.value)}
                  </div>
                </div>
                <FormMessage className="text-red-400 text-sm mt-1" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      placeholder="Adresse e-mail *"
                      className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors pr-8"
                    />
                  </FormControl>
                  <div className="absolute right-0 top-0">
                    {getFieldIcon('email', field.value)}
                  </div>
                </div>
                <FormMessage className="text-red-400 text-sm mt-1" />
              </FormItem>
            )}
          />
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-24">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 text-white focus:border-white rounded-none">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border-gray-700">
                        {countryCodes.map((country, index) => (
                          <SelectItem key={index} value={country.code} className="text-white hover:bg-gray-800">
                            {country.flag} {country.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <div className="relative">
                      <FormControl>
                        <input
                          {...field}
                          type="tel"
                          placeholder="Numéro de téléphone"
                          className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors pr-8"
                        />
                      </FormControl>
                      <div className="absolute right-0 top-0">
                        {getFieldIcon('telephone', field.value)}
                      </div>
                    </div>
                    <FormMessage className="text-red-400 text-sm mt-1" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <FormField
          control={form.control}
          name="entreprise"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <input
                    {...field}
                    placeholder="Entreprise / Organisation"
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors pr-8"
                  />
                </FormControl>
                <div className="absolute right-0 top-0">
                  {getFieldIcon('entreprise', field.value)}
                </div>
              </div>
            </FormItem>
          )}
        />

        {/* Détails du projet */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 text-white focus:border-white rounded-none text-lg font-light">
                    <SelectValue placeholder="Service souhaité *" className="text-gray-400" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-black border-gray-700">
                  {services.map((service, index) => (
                    <SelectItem key={index} value={service} className="text-white hover:bg-gray-800">
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400 text-sm mt-1" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 text-white focus:border-white rounded-none text-lg font-light">
                      <SelectValue placeholder="Budget estimé" className="text-gray-400" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-black border-gray-700">
                    {budgets.map((budget, index) => (
                      <SelectItem key={index} value={budget} className="text-white hover:bg-gray-800">
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="delai"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 text-white focus:border-white rounded-none text-lg font-light">
                      <SelectValue placeholder="Délai souhaité" className="text-gray-400" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-black border-gray-700">
                    {delais.map((delai, index) => (
                      <SelectItem key={index} value={delai} className="text-white hover:bg-gray-800">
                        {delai}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Décrivez votre projet, vos objectifs, votre vision... *"
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white resize-none text-lg font-light transition-colors pr-8"
                    rows={4}
                  />
                </FormControl>
                <div className="absolute right-0 top-0">
                  {getFieldIcon('message', field.value)}
                </div>
              </div>
              <FormMessage className="text-red-400 text-sm mt-1" />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium flex items-center space-x-3 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Envoyer ma demande</span>
              </>
            )}
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Réponse garantie sous 24h • Les champs marqués * sont obligatoires
          </p>
        </div>
      </form>
    </Form>
  );
};
