
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Facts from '@/components/Facts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InputServices from '@/components/InputServices';
import Navbar from '@/components/Navbar';
import NewsInsights from '@/components/NewsInsights';
import Newsletter from '@/components/NewsLetter';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>EurTech</title>
      </Head>
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Facts />
      <InputServices />
      <CaseStudies />
      <Testimonials />
      <NewsInsights />
      <Newsletter />
      <Footer />
    </div>
  );
}
