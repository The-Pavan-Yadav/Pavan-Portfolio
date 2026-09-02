import { useEffect } from 'react';
import { Certificates } from './Certificates';

export const AllCertificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <Certificates isArchive={true} />
    </main>
  );
};
