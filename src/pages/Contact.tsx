import { Head } from 'vite-react-ssg';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact as ContactSection } from '@/components/Contact';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FloatingContactWidget } from '@/components/FloatingContactWidget';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f1eb]">
      <Head>
        <title>Contact | Direction marketing et branding | Link Agency</title>
        <meta
          name="description"
          content="Contactez Link Agency pour cadrer votre dispositif de marque, de communication ou de marketing au Maroc. Échange direct avec le fondateur."
        />
        <link rel="canonical" href="https://linkagency.ma/contact" />
        <meta property="og:title" content="Contact — Link Agency" />
        <meta property="og:description" content="Parlons de votre dispositif. Échange direct avec le fondateur de Link Agency." />
        <meta property="og:url" content="https://linkagency.ma/contact" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main className="link-editorial pt-20" id="contact">
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContactWidget />
    </div>
  );
};

export default ContactPage;
