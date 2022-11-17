import Head from 'next/head';

import CityRow from '@/components/CityRow';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Oyo Nextjs App</title>
      </Head>
      {/* Header */}
      <Header />
      <CityRow />
      {/* Search */}
      {/* Hero */}
      {/* Banner */}
      {/* Footer */}
    </div>
  );
};

export default Index;
