import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Header from './Header';
import './App.css';
import English from './elements/translations/en.json';
import Spanish from './elements/translations/es.json';

const langs = {
   en: English,
   es: Spanish
};

function App() {
   const [init, setInit] = useState(false);
   const [page, setPage] = useState('Home');
   const [actualLang, setActualLang] = useState('es');
   const [l, setL] = useState(langs[actualLang]);

   const pages = {
      Home: <Home lang={l} />,
      Projects: <Projects lang={l} />,
      Skills: <Skills lang={l} />,
      Contact: <Contact lang={l} />
   };

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   useEffect(() => setL(langs[actualLang]), [actualLang]);

   const particlesLoaded = (container) => {
      console.log('Particles Loaded:', container);
   };

   const options = useMemo(
      () => ({
         background: {
            color: '#f8f8f8'
         },
         fpsLimit: 40,
         interactivity: {
            events: {
               // onClick: { enable: true, mode: 'push' },
               onHover: { enable: true, mode: 'repulse' }
            },
            modes: {
               push: { quantity: 4 },
               repulse: { distance: 200, duration: 0.4 }
            }
         },
         particles: {
            color: { value: '#000' },
            links: {
               color: '#b4b4b4',
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1
            },
            move: {
               direction: 'none',
               enable: true,
               outModes: { default: 'bounce' },
               random: false,
               speed: 3,
               straight: false
            },
            number: {
               density: { enable: true, area: 1080 },
               value: 200
            },
            opacity: {
               value: { min: 0.1, max: 0.4 },
               animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1
               }
            },
            shape: {
               type: 'circle',
               stroke: { width: 0, color: '#000' }
            },
            size: {
               value: { min: 0.5, max: 1.5 },
               random: { enable: true }
            }
         },
         detectRetina: true
      }),
      []
   );

   // ---- Change page ----
   const changePage = (page) => setPage(page);

   const setLang = (lang) => setActualLang(lang);

   return (
      <div className='App'>
         <Header
            changePage={changePage}
            changeLang={setLang}
            l={actualLang}
            lang={l}
         />
         <main>{pages[page]}</main>
         {init && (
            <Particles
               id='tsparticles'
               options={options}
               particlesLoaded={particlesLoaded}
               style={{ zIndex: -1 }}
               className='particles'
            />
         )}
      </div>
   );
}

export default App;
