import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<any> = ({ children }) => {
return (
   <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 relative">
         {children}
      </main>
      <Footer />
   </div>
);
};

export default Layout;