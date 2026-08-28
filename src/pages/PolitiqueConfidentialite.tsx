import { LegalPageLayout } from "@/components/LegalPageLayout";

const PolitiqueConfidentialite = () => (
  <LegalPageLayout title="Politique de confidentialité" description="Traitement des données personnelles transmises à Link Agency." path="politique-de-confidentialite">
    <section><h2 className="text-2xl font-medium text-black">Responsable du traitement</h2><p>HARKA STRATEGY CONSULTING SARLAU, exploitant la marque Link Agency, est responsable des données collectées via ce site. Pour toute question : <a className="underline" href="mailto:bharkaoui@linkagency.ma">bharkaoui@linkagency.ma</a>.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Données et finalités</h2><p>Le formulaire peut collecter votre nom, fonction, email professionnel, numéro WhatsApp, entreprise, service recherché, budget indicatif, horizon de déploiement et message. Ces données servent uniquement à étudier la demande, vous répondre, préparer un cadrage et assurer le suivi de la relation commerciale.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Base, destinataires et durée</h2><p>Le traitement repose sur votre démarche de contact et sur les mesures précontractuelles demandées. Les informations sont accessibles au dirigeant de Link Agency et aux prestataires techniques strictement nécessaires au fonctionnement du site. Elles ne sont pas vendues. Les demandes sans relation contractuelle sont conservées au maximum vingt-quatre mois après le dernier échange, sauf obligation légale ou demande de suppression.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Mesure d’audience</h2><p>Google Analytics n’est chargé qu’après votre accord explicite. Vous pouvez refuser ou modifier ce choix depuis le lien « Gérer les cookies » présent dans le pied de page.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Vos droits</h2><p>Vous pouvez demander l’accès, la rectification, l’opposition ou la suppression de vos données en écrivant à l’adresse de contact. Les traitements de données personnelles sont encadrés au Maroc par la loi n° 09-08 et l’autorité compétente est la CNDP.</p></section>
  </LegalPageLayout>
);

export default PolitiqueConfidentialite;
