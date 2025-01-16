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
            <Skill name={'Django'} icon={'TbBrandDjango'} />
         </div>
         <h1>{lang.skills.languages}</h1>
         <div style={myStyle}>
            <Skill name={'C++'} icon={'SiCplusplus'} />
            <Skill name={'Python'} icon={'AiOutlinePython'} />
            <Skill name={'C sharp'} icon={'TbBrandCSharp'} />
            <Skill name={'JavaScript'} icon={'JavaScriptIcon'} />
         </div>
         <h1>{lang.skills.frontend}</h1>
         <div style={myStyle}>
            <Skill name={'React'} icon={'ReactIcon'} />
            <Skill name={'HTML'} icon={'Html5Icon'} />
            <Skill name={'CSS'} icon={'FaCss3'} />
         </div>
         <h1>{lang.skills.backend}</h1>
         <div style={myStyle}>
            <Skill name={'Python'} icon={'AiOutlinePython'} />
            <Skill name={'Node.js'} icon={'FaNodeJs'} />
            <Skill name={'Django'} icon={'TbBrandDjango'} />
            <Skill name={'SQL'} icon={'TbSql'} />
            <Skill name={'Sequaqlize'} icon={'SiSequelize'} />
         </div>
         <h1>{lang.skills.others}</h1>
         <div style={myStyle}>
            <Skill name={'Github'} icon={'GithubIcon'} />
            <Skill name={'Git'} icon={'GitBranchIcon'} />
            <Skill name={'Unity'} icon={'FaUnity'} />
            <Skill name={'Tensorflow'} icon={'SiTensorflow'} />
            <Skill name={'Neural Networks'} icon={'NeuralNetworkIcon'} />
         </div>
      </div>
   );
}

export default Skills;
