import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Link } from 'react-router-dom';
import { captureAttribution, getAttribution, trackEvent, trackGenerateLead } from '@/lib/tracking';

const formSchema = z.object({
  nom: z.string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long')
    .refine(val => !/<script|javascript:/i.test(val), 'Contenu invalide'),
  fonction: z.string()
    .trim()
    .min(2, 'La fonction doit contenir au moins 2 caractères')
    .max(100, 'La fonction est trop longue')
    .refine(val => !/<script|javascript:/i.test(val), 'Contenu invalide'),
  email: z.string()
    .trim()
    .email('Adresse email non valide')
    .max(255, 'Email trop long'),
  telephone: z.string()
    .trim()
    .min(8, 'Numéro de téléphone trop court')
    .max(20, 'Numéro de téléphone trop long')
    .refine(val => /^[\d\s+()-]+$/.test(val), 'Format de téléphone invalide'),
  entreprise: z.string()
    .trim()
    .min(2, 'Le nom de l’entreprise doit contenir au moins 2 caractères')
    .max(200, 'Nom d\'entreprise trop long'),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  budget: z.string().min(1, 'Veuillez sélectionner un budget indicatif'),
  message: z.string()
    .trim()
    .min(20, 'Le message doit contenir au moins 20 caractères')
    .max(1000, 'Le message est trop long (max 1000 caractères)')
    .refine(val => !/<script|javascript:|on\w+=/i.test(val), 'Contenu invalide'),
  delai: z.string().optional(),
  countryCode: z.string(),
  consent: z.boolean().refine(Boolean, 'Votre accord est nécessaire pour transmettre la demande')
});

type FormData = z.infer<typeof formSchema>;

const services = [
  'Direction marketing externalisée',
  'Branding & Identité visuelle',
  'Social Media Management',
  'Création de contenu',
  'Campagnes publicitaires',
  'Vidéo & Motion Design',
  'Événements corporate & activations',
  'Autre'
];

const budgets = [
  '100 000 à 250 000 MAD',
  '250 000 à 500 000 MAD',
  '500 000 à 1 000 000 MAD',
  'Plus de 1 000 000 MAD',
  'À cadrer ensemble'
];

const delais = [
  'Sous 1 mois',
  '1 à 3 mois',
  '3 à 6 mois',
  '6 à 12 mois',
  'Programme annuel',
  'À confirmer'
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
  const [submissionSucceeded, setSubmissionSucceeded] = useState(false);
  const formStarted = useRef(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: '',
      fonction: '',
      email: '',
      telephone: '',
      entreprise: '',
      service: '',
      budget: '',
      message: '',
      delai: '',
      countryCode: '+212',
      consent: false
    }
  });

  const { watch, formState: { errors } } = form;
  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    captureAttribution();
    const attribution = getAttribution();

    const summary = `Nom: ${data.nom}
Fonction: ${data.fonction}
Email: ${data.email}
Téléphone: ${data.countryCode} ${data.telephone}
Entreprise: ${data.entreprise}
Expertise souhaitée: ${data.service}
Budget d’investissement: ${data.budget}
Horizon: ${data.delai || 'Non renseigné'}

Message:
${data.message}`;

    // 1) Soumission Netlify Forms (backend + email auto vers bharkaoui@linkagency.ma)
    const formBody = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': '',
      nom: data.nom,
      fonction: data.fonction,
      email: data.email,
      telephone: `${data.countryCode} ${data.telephone}`,
      entreprise: data.entreprise,
      service: data.service,
      budget: data.budget,
      delai: data.delai || '',
      message: data.message,
      consent: data.consent ? 'oui' : 'non',
      summary,
      landing_page: attribution.landing_page || '',
      referrer_host: attribution.referrer_host || '',
      utm_id: attribution.utm_id || '',
      utm_source: attribution.utm_source || '',
      utm_medium: attribution.utm_medium || '',
      utm_campaign: attribution.utm_campaign || '',
      utm_content: attribution.utm_content || '',
      utm_term: attribution.utm_term || '',
    }).toString();

    let netlifyOk = false;
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });
      netlifyOk = res.ok;
    } catch {
      netlifyOk = false;
    }

    // 2) Une conversion n'est enregistrée qu'après réception confirmée par Netlify.
    if (netlifyOk) {
      trackGenerateLead({
        formLocation: 'contact_form',
        serviceInterest: data.service,
        budgetBand: data.budget,
        projectTimeline: data.delai,
      });
    } else {
      trackEvent('form_submit_error', {
        category: 'technical',
        form_location: 'contact_form',
        error_type: 'netlify_submission_failed',
      });
    }

    // 3) Message WhatsApp préparé (option bonus, plus principal)
    const waMessage = `🚀 NOUVELLE DEMANDE - Link Agency

${summary}`;
    const whatsappUrl = `https://wa.me/212699024526?text=${encodeURIComponent(waMessage)}`;
    (window as unknown as { __lastLeadWA?: string }).__lastLeadWA = whatsappUrl;

    setIsSubmitting(false);
    setSubmissionSucceeded(netlifyOk);
    setIsSubmitted(true);

    toast({
      title: netlifyOk ? 'Demande envoyée avec succès !' : 'Envoi à finaliser sur WhatsApp',
      description: netlifyOk
        ? 'Badre étudie personnellement votre demande. Vous pouvez aussi poursuivre sur WhatsApp.'
        : 'Le formulaire n’a pas pu être confirmé. Une copie a été préparée pour WhatsApp.',
    });
  };

  const getFieldIcon = (fieldName: keyof FormData, value: string) => {
    if (!value) return null;
    const hasError = errors[fieldName];
    return hasError ? (
      <AlertCircle className="h-4 w-4 text-[#9f4f35] sm:h-5 sm:w-5" />
    ) : (
      <Check className="h-4 w-4 text-[#765fc4] sm:h-5 sm:w-5" />
    );
  };

  if (isSubmitted) {
    const waUrl =
      (typeof window !== 'undefined' &&
        (window as unknown as { __lastLeadWA?: string }).__lastLeadWA) ||
      'https://wa.me/212699024526';
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center sm:min-h-[400px]">
        <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#d7e942] sm:mb-6 sm:h-16 sm:w-16">
          <Check className="h-6 w-6 text-black sm:h-8 sm:w-8" />
        </div>
        <h3 className="mb-3 text-xl font-medium text-black sm:mb-4 sm:text-2xl">{submissionSucceeded ? 'Demande reçue' : 'Finaliser sur WhatsApp'}</h3>
        <p className="mb-6 max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
          {submissionSucceeded
            ? 'Merci. Badre étudie personnellement votre demande. Vous pouvez poursuivre directement par WhatsApp.'
            : 'La réception du formulaire n’a pas été confirmée. Envoyez la demande préparée sur WhatsApp pour ne rien perdre.'}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-black bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#765fc4]"
        >
          Continuer sur WhatsApp
        </a>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={form.handleSubmit(onSubmit)}
        onFocusCapture={() => {
          if (formStarted.current) return;
          formStarted.current = true;
          trackEvent('form_start', { category: 'engagement', form_location: 'contact_form' });
        }}
        className="max-w-2xl space-y-5 sm:space-y-7"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" aria-hidden="true">
          <label>Ne pas remplir : <input name="bot-field" /></label>
        </p>
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full border-0 border-b border-black/30 bg-transparent pb-3 pr-8 text-base text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:text-lg"
                    />
                  </FormControl>
                  <div className="absolute right-0 top-0">
                    {getFieldIcon('nom', field.value)}
                  </div>
                </div>
                <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="fonction"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <input
                      {...field}
                       placeholder="Fonction *"
                      className="w-full border-0 border-b border-black/30 bg-transparent pb-3 pr-8 text-base text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:text-lg"
                    />
                  </FormControl>
                  <div className="absolute right-0 top-0">
                    {getFieldIcon('fonction', field.value)}
                  </div>
                </div>
                <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder="Email professionnel *"
                      className="w-full border-0 border-b border-black/30 bg-transparent pb-3 pr-8 text-base text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:text-lg"
                    />
                  </FormControl>
                  <div className="absolute right-0 top-0">
                    {getFieldIcon('email', field.value)}
                  </div>
                </div>
                <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
              </FormItem>
            )}
          />
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-28 sm:w-32">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger aria-label="Sélectionner un indicatif téléphonique" className="h-auto rounded-none border-0 border-b border-black/30 bg-transparent pb-3 text-sm text-black focus:border-black sm:text-base">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-48 border-black/15 bg-[#f4f1eb]">
                        {countryCodes.map((country, index) => (
                          <SelectItem key={index} value={country.code} className="text-sm text-black focus:bg-[#d8cec1]">
                            <span className="flex items-center gap-2">
                              <span>{country.flag}</span>
                              <span>{country.code}</span>
                            </span>
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
                          placeholder="WhatsApp *"
                          className="w-full border-0 border-b border-black/30 bg-transparent pb-3 pr-8 text-base text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:text-lg"
                        />
                      </FormControl>
                      <div className="absolute right-0 top-0">
                        {getFieldIcon('telephone', field.value)}
                      </div>
                    </div>
                    <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
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
                     placeholder="Entreprise *"
                    className="w-full border-0 border-b border-black/30 bg-transparent pb-3 pr-8 text-base text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:text-lg"
                  />
                </FormControl>
                <div className="absolute right-0 top-0">
                  {getFieldIcon('entreprise', field.value || '')}
                </div>
              </div>
              <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
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
                     <SelectTrigger aria-label="Sélectionner l'expertise souhaitée" className="h-auto rounded-none border-0 border-b border-black/30 bg-transparent pb-3 text-base text-black focus:border-black sm:text-lg">
                     <SelectValue placeholder="Expertise souhaitée *" className="text-gray-400" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-black/15 bg-[#f4f1eb]">
                  {services.map((service, index) => (
                    <SelectItem key={index} value={service} className="text-black focus:bg-[#d8cec1]">
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                     <SelectTrigger aria-label="Sélectionner le budget d’investissement indicatif" className="h-auto rounded-none border-0 border-b border-black/30 bg-transparent pb-3 text-base text-black focus:border-black sm:text-lg">
                       <SelectValue placeholder="Budget d’investissement indicatif *" className="text-gray-400" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-black/15 bg-[#f4f1eb]">
                    {budgets.map((budget, index) => (
                      <SelectItem key={index} value={budget} className="text-black focus:bg-[#d8cec1]">
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
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
                     <SelectTrigger aria-label="Sélectionner l'horizon de déploiement" className="h-auto rounded-none border-0 border-b border-black/30 bg-transparent pb-3 text-base text-black focus:border-black sm:text-lg">
                       <SelectValue placeholder="Horizon de déploiement" className="text-gray-400" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-black/15 bg-[#f4f1eb]">
                    {delais.map((delai, index) => (
                      <SelectItem key={index} value={delai} className="text-black focus:bg-[#d8cec1]">
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
                     placeholder="Décrivez l’entreprise, l’enjeu et le résultat attendu… *"
                    className="min-h-[100px] w-full resize-none border-0 border-b border-black/30 bg-transparent pb-3 pr-8 text-base text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:min-h-[120px] sm:text-lg"
                    rows={3}
                  />
                </FormControl>
                <div className="absolute right-0 top-0">
                  {getFieldIcon('message', field.value)}
                </div>
              </div>
              <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-black/60">
                <input type="checkbox" name={field.name} ref={field.ref} checked={field.value} onChange={field.onChange} onBlur={field.onBlur} className="mt-1 h-4 w-4 shrink-0 accent-[#765fc4]" />
                <span>J’accepte que Link Agency utilise ces informations pour étudier ma demande et me répondre. <Link to="/politique-de-confidentialite" className="underline underline-offset-4">Politique de confidentialité</Link>.</span>
              </label>
              <FormMessage className="mt-1 text-xs text-[#9f4f35] sm:text-sm" />
            </FormItem>
          )}
        />

        <div className="pt-4 sm:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-3 border border-[#765fc4] bg-[#765fc4] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#6751b7] hover:bg-[#6751b7] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <span className="text-sm sm:text-base">Envoi en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 smooth-hover" />
                 <span className="text-sm sm:text-base">Envoyer la demande</span>
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-black/45 sm:text-left sm:text-sm">
             Demande transmise directement à Badre · Les champs marqués * sont obligatoires
          </p>
        </div>
      </form>
    </Form>
  );
};
