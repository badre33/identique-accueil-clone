import { LegalPageLayout } from "@/components/LegalPageLayout";

const PolitiqueCookies = () => (
  <LegalPageLayout title="Politique de cookies" description="Cookies essentiels et mesure d'audience utilisés sur le site Link Agency." path="politique-de-cookies">
    <section><h2 className="text-2xl font-medium text-black">Ce que le site utilise</h2><p>Le site mémorise localement votre préférence de consentement afin de ne pas vous redemander votre choix à chaque visite. Ce stockage est nécessaire au fonctionnement de la gestion des cookies.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Google Analytics</h2><p>La mesure d’audience Google Analytics est désactivée par défaut. Le script n’est téléchargé qu’après votre acceptation. Il sert à comprendre les pages consultées et les parcours de navigation afin d’améliorer le site.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Changer d’avis</h2><p>Vous pouvez rouvrir le panneau de consentement à tout moment avec le bouton « Gérer les cookies » du pied de page. Un refus n’empêche pas l’accès au site, au formulaire ou aux liens WhatsApp.</p></section>
  </LegalPageLayout>
);

export default PolitiqueCookies;
