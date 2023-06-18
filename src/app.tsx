import { useEffect } from 'react';
import { Logo } from './components/global/logo/logo';

import UnitForgeIcon from './assets/icons/icon.svg';

function App() {
  useEffect(() => {
    // Set FavIcon
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = UnitForgeIcon;
  });

  return (
    <main className="min-h-screen min-w-screen flex flex-col bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] font-Montserrat text-white">
      <div className="container flex-grow flex-shrink-0 px-8 mx-auto basis-auto ">
        <header className="flex">
          <Logo />
        </header>
      </div>
      <footer className="container text-neutral-400 flex justify-center items-center flex-shrink-0 h-20 mx-auto text-[0.65rem] text-center uppercase">
        Copyright © 2023
      </footer>
    </main>
  );
}

export default App;
