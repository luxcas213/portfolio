import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
import CardDefault from './elements/Card';
import { Cancel02Icon } from 'hugeicons-react';

const React = require('react');
function Projects() {
   const STARTUPS = [
      {
         name: 'Startup Imaginify',
         date: '06.09.2024',
         desc: '## Imaginify Startup.\nEffortlessly create, download, and use high-quality transparent images. No fees, no hassle – just pure creativity at your fingertips! Start now and let your imagination flow 💡✨. (Page NO LONGER AVAILABLE) .'
      },
{
         name: 'Startup 223D',
         date: '03.02.2024',
         desc: 'A web platform that generates 3D objects in STL format based on a 2D blueprint 🖼️➡️🛠️.'
      },
{
         name: 'CALL of TIC',
         date: '10.02.2024',
         desc: 'A multiplayer FPS shooter game where you join a server and enter a deathmatch, utilizing various weapons and abilities 🔫⚔️💥.'
      }
   ];
   const [showModal, setShowModal] = useState(0);
   useEffect(() => {
      console.log(showModal);
   }, [showModal]);
   return (
      <div>
         <div class='ag-format-container'>
            <div class='ag-courses_box'>
               {STARTUPS.map((startup, index) => (
                  <CardDefault
                     key={index}
                     title={startup.name}
                     startDate={startup.date}
                     onClick={() => setShowModal(index + 1)}
                  />
               ))}
            </div>
         </div>
         {showModal !== 0 && (
            <div
               style={{
                  position: 'fixed',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#44444499',
                  zIndex: 5
               }}
            >
               <div
                  style={{
                     width: 800,
                     height: 500,
                     backgroundColor: 'white',
                     borderRadius: 10,
                     padding: 20,
                     position: 'relative'
                  }}
               >
                  <div style={{ textAlign: 'right' }}>
                     <Cancel02Icon onClick={() => setShowModal(0)} />
                  </div>
                  <p style={{ fontSize: 24 }}>
                     <Markdown>{STARTUPS[showModal - 1].desc}</Markdown>
                  </p>
               </div>
            </div>
         )}
      </div>
   );
}

export default Projects;
