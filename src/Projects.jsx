import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
import CardDefault from './elements/Card';
import { Cancel02Icon } from 'hugeicons-react';

const React = require('react');
function Projects() {
   const STARTUPS = [
      {
         name: 'Bot de whatsapp Bnet',
         date: '01.02.2024',
         desc: '## Bot de whatsapp para manejo de transacciones.\nEl bot estaba diseñado para clientes. Los mismos se registraban y mediante una serie de mensajes podían acceder a su historial de transacciones tanto como a sus acreditadas. \n\nMás información: \n[More info +](https://checker-gate-f5e.notion.site/Chatbot-WhatsApp-documentaci-n-ab772bc256724b2d899e872518b534c7)'
      },
      {
         name: 'Startup Xprience',
         date: '2024 (year project)',
         desc: '### Resumen del Proyecto.\nXprience simplifica la planificación de salidas, ofreciendo una plataforma integral para elegir actividades, reservar transporte y gestionar costos. Nuestra misión es liberar a los usuarios del estrés organizativo para maximizar su disfrute en cada experiencia.'
      },
      {
         name: 'Startup Imaginify',
         date: '06.09.2024',
         desc: '## Imaginify startup.\nCreate, download, and use high-quality transparent images effortlessly. No fees, no hassle – just pure creativity at your fingertips! Try it out now and let your imagination flow 💡. [Page](https://imaginifyapp.com/) (NO LONGER AVAILABLE)'
      },
      {
         name: 'Bot de whatsapp para manejo de transferencias',
         date: '12.12.2024',
         desc: 'En proceso... No hay información disponible ⌛.'
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
