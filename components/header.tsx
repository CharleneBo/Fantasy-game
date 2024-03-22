import React from "react";
import '../app/globals.css';

const Header = () => {
  return (
    <header className="bg-cover bg-center h-screen flex flex-col justify-center items-center" style={{backgroundImage: 'url(/images/fond-header.webp)'}}>
      <div className="container mx-auto text-center">
        {/* Logo et nom du jeu au milieu */}
        <div className="flex flex-col items-center">
          <img src="images/logo_jeu_ex.png" alt="Logo du jeu" className="h-50 logo-outline" />
          <h1 className="font-bold text-white text-5xl outline-text-purple">Nom du Jeu</h1>
        </div>
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="bg-gray-800 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mx-auto flex items-center w-[89%] md:w-full">
        {/* Logo */}
        <div className="flex justify-start text-white pl-8 pr-8"><img src="images/logo_jeu_ex.png" alt="Logo du jeu" className="h-20" /></div>
        {/* Partie de navigation */}
        <div className="flex space-x-4 md:space-x-10 md:text-base lg:text-lg xl:text-xl">
          <div className="text-white hover:text-gray-300">
            <a href="#">Accueil</a>
          </div>
          <div className="text-white hover:text-gray-300">
            <a href="#">A Propos</a>
          </div>
          <div className="text-white hover:text-gray-300">
            <a href="#">Contact</a>
          </div>
        </div>
        {/* Réseaux sociaux */}
      </div>
      <div className="flex justify-end space-x-4 pl-9 pr-6">
          <a href="#" className="text-white"><img src="/svg/facebook.svg" alt="Facebook" className="h-10 mb-2" /></a>
          <a href="#" className="text-white"><img src="/svg/instagram.svg" alt="Instagram" className="h-10 mb-2" /></a>
          <a href="#" className="text-white"><img src="svg/X.svg" alt="X" className="h-10 mb-2" /></a>
        </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        {/* Contenu principal de votre page */}
      </div>
      <Nav />
    </div>
  );
};

export default Layout;
