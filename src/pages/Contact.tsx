import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact as ContactSection } from '@/components/Contact';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FloatingContactWidget } from '@/components/FloatingContactWidget';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Contact — Link Agency | Cabinet conseil communication corporate Maroc</title>
        <meta
          name="description"
          content="Contactez Link Agency pour cadrer votre dispositif de communication corporate au Maroc. Devis sous 24h. Casablanca, Rabat, Marrakech."
        />
        <link rel="canonical" href="https://linkagency.ma/contact" />
        <meta property="og:title" content="Contact — Link Agency" />
        <meta property="og:description" content="Parlons de votre dispositif. Premier retour sous 24h." />
        <meta property="og:url" content="https://linkagency.ma/contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <main className="pt-20" id="contact">
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContactWidget />
    </div>
  );
};

export default ContactPage;
