import * as Icons from 'hugeicons-react';
import * as ReactIconsAi from 'react-icons/ai';
import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsTb from 'react-icons/tb';
import * as ReactIconsSi from 'react-icons/si';

function Skill({ name, icon, children }) {
   const IconComponent = Icons[icon];
   let ReactIconComponent = ReactIconsAi[icon];
   if (!ReactIconComponent) ReactIconComponent = ReactIconsFa[icon];
   if (!ReactIconComponent) ReactIconComponent = ReactIconsTb[icon];
   if (!ReactIconComponent) ReactIconComponent = ReactIconsSi[icon];
   return (
      <div
         className='skill'
         style={{
            backgroundColor: '#1f2937',
            padding: '0 20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 20,
            margin: 5
         }}
      >
         {IconComponent && <IconComponent size={24} color='#fff' />}
         {ReactIconComponent && <ReactIconComponent size={24} color='#fff' />}
         {children}
         <h3
            style={{
               color: '#fff',
               fontWeight: 400,
               fontSize: '1em'
            }}
         >
            {name}
         </h3>
      </div>
   );
}

export default Skill;
