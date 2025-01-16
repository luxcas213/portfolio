import Skill from './elements/Skill';

const myStyle = {
   width: '80%'
};

function Skills({ lang }) {
   return (
      <div
         style={{
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
         }}
      >
         <h1>{lang.skills.featured}</h1>
         <div style={myStyle}>
            <Skill name={'Python'} icon={'AiOutlinePython'} />
            <Skill name={'Node.js'} icon={'FaNodeJs'} />
         </div>
         <h1>{lang.skills.languages}</h1>
         <div style={myStyle}>
            <Skill name={'C++'} icon={'SiCplusplus'} />
            <Skill name={'C sharp'} icon={'TbBrandCSharp'} />
            <Skill name={'TypeScript'} icon={'Typescript01Icon'} />
            <Skill name={'JavaScript'} icon={'JavaScriptIcon'} />
         </div>
         <h1>{lang.skills.frontend}</h1>
         <div style={myStyle}>
            <Skill name={'React'} icon={'ReactIcon'} />
            <Skill name={'HTML'} icon={'Html5Icon'} />
            <Skill name={'CSS'} icon={'FaCss3'} />
            <Skill name={'Bootstrap'} icon={'BootstrapIcon'} />
         </div>
         <h1>{lang.skills.backend}</h1>
         <div style={myStyle}>
            <Skill name={'Python'} icon={'AiOutlinePython'} />
            <Skill name={'Node.js'} icon={'FaNodeJs'} />
            <Skill name={'Mongo'} icon={'TbBrandMongodb'} />
            <Skill name={'SQL'} icon={'TbSql'} />
         </div>
         <h1>{lang.skills.others}</h1>
         <div style={myStyle}>
            <Skill name={'Github'} icon={'GithubIcon'} />
            <Skill name={'Git'} icon={'GitBranchIcon'} />
            <Skill name={'React Native'} icon={'TbBrandReactNative'} />
            <Skill name={'Linux'} icon={'FaLinux'} />
            <Skill name={'Android Studio'} icon={'AndroidIcon'} />
            <Skill name={'Arduino'} icon={'SiArduino'} />
         </div>
      </div>
   );
}

export default Skills;
