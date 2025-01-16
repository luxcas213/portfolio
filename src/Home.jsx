function Home({ lang }) {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
            marginTop: '5%',
            flexWrap: 'wrap',
            gap: 20
         }}
      >
         <div>
            <p style={{ textTransform: 'uppercase' }}>
               ━━ &nbsp;&nbsp; {lang.home.greeting}
            </p>
            <h1
               style={{ fontSize: '3em' }}
               dangerouslySetInnerHTML={{ __html: lang.home.welcomeMessage }}
            ></h1>
            <p style={{ marginBottom: '80px' }}>{lang.home.shortDesc}</p>
            <a href='./cv.pdf' className='cvButton' target='_blank'>
               {lang.home.cv}
            </a>
         </div>
         <img src='./me.png' className='rounded' alt='me' />
      </div>
   );
}

export default Home;
