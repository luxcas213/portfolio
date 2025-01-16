function Header({ changePage, changeLang, l, lang }) {
   const resetClassname = (e) => {
      document.querySelectorAll('header nav button').forEach((button) => {
         button.className = '';
      });
      e.target.className = 'focused';
   };
   return (
      <header>
         <img
            src={'./dec.png'}
            style={{ mixBlendMode: 'multiply', width: 100 }}
            alt='decorative element'
         />
         <nav>
            <button
               onClick={(e) => {
                  changePage('Home');
                  resetClassname(e);
               }}
               className='focused'
            >
               {lang.header.home}
            </button>
            <button
               onClick={(e) => {
                  changePage('Projects');
                  resetClassname(e);
               }}
            >
               {lang.header.projects}
            </button>
            <button
               onClick={(e) => {
                  changePage('Skills');
                  resetClassname(e);
               }}
            >
               {lang.header.skills}
            </button>
            <button
               onClick={(e) => {
                  changePage('Contact');
                  resetClassname(e);
               }}
            >
               {lang.header.contact}
            </button>
         </nav>
         <div>
            <input
               type='radio'
               name='lang'
               id='es'
               onChange={() => changeLang('es')}
               checked={l === 'es'}
               hidden
            />
            <label for='es' style={{ margin: 5 }}>
               ES
            </label>
            <input
               type='radio'
               name='lang'
               id='en'
               onChange={() => changeLang('en')}
               checked={l === 'en'}
               hidden
            />
            <label for='en' style={{ margin: 5 }}>
               EN
            </label>
         </div>
      </header>
   );
}

export default Header;
