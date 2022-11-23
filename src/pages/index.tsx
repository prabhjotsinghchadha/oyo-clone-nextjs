import Head from 'next/head';

import CityRow from '@/components/CityRow';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchBanner from '@/components/SearchBanner';

const Index = () => {
  return (
    <>
      <Head>
        <title>Oyo Nextjs App</title>
      </Head>
      <Header />
      <CityRow />
      <SearchBanner />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Index;
