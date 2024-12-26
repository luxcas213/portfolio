import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function App() {
   const [init, setInit] = useState(false);
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

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
               onClick: { enable: true, mode: 'push' },
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

   return (
      <div className='App'>
         {init && (
            <Particles
               id='tsparticles'
               options={options}
               particlesLoaded={particlesLoaded}
            />
         )}
      </div>
   );
}

export default App;
