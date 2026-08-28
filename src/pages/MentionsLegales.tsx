import { LegalPageLayout } from "@/components/LegalPageLayout";

const MentionsLegales = () => (
  <LegalPageLayout title="Mentions légales" description="Éditeur, responsable de publication et hébergeur du site Link Agency." path="mentions-legales">
    <section><h2 className="text-2xl font-medium text-black">Éditeur du site</h2><p className="mt-3">Le site linkagency.ma présente la marque Link Agency, exploitée par <strong>HARKA STRATEGY CONSULTING SARLAU</strong>, société établie à Casablanca, Maroc.</p><p>Responsable de publication : Badreddine Harkaoui, fondateur et dirigeant.</p><p>Contact : <a className="underline" href="mailto:bharkaoui@linkagency.ma">bharkaoui@linkagency.ma</a> · <a className="underline" href="tel:+212699024526">+212 699 024 526</a>.</p><p>Les informations complètes d’immatriculation et l’adresse juridique figurent sur les documents contractuels émis par la société.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Hébergement</h2><p>Le site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, États-Unis.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Propriété intellectuelle</h2><p>Les textes, éléments graphiques, marques, logos et contenus présents sur ce site sont protégés. Toute reproduction ou utilisation non autorisée est interdite, sauf accord écrit préalable ou exception prévue par la loi.</p></section>
    <section><h2 className="text-2xl font-medium text-black">Responsabilité</h2><p>Link Agency veille à l’exactitude des informations publiées mais ne garantit pas leur exhaustivité permanente. Les contenus ont une vocation informative et ne constituent pas un engagement contractuel sans proposition ou contrat signé.</p></section>
  </LegalPageLayout>
);

export default MentionsLegales;
