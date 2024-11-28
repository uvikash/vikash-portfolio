import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const skillsData = [
    { name: 'HTML', rating: 5 },
    { name: 'CSS', rating: 4.5 },
    { name: 'Bootstrap', rating: 2.5 },
    { name: 'JavaScript', rating: 2.5 },
    { name: 'Java', rating: 2.5 },
    { name: 'MUI', rating: 4 },
    { name: 'React.js', rating: 3 },
    { name: 'SASS', rating: 4 },
    { name: 'Node.js', rating: 3 },
    { name: 'Express.js', rating: 4 },
    { name: 'JSX', rating: 2 },
    { name: 'Git & GitHub', rating: 3.5 },
    { name: 'MangoDB', rating: 3 },
    { name: 'Python', rating: 2 },
    { name: 'SDLC', rating: 3 },
    { name: 'StyleComponent', rating: 3 },
    { name: 'CSS3', rating: 3 },
    { name: 'ES6', rating: 2 },
    { name: 'Redux', rating: 2 },
    { name: 'C Language', rating: 4.5 },
    { name: 'JavaScript', rating: 3.5 },
    { name: 'AI & ML', rating: 2.5 },
    { name: 'Axios', rating: 1.2 },
    { name: 'MDLC', rating: 1.1 },
    { name: 'HTML5', rating: 5 },
    { name: 'Shell Programing', rating: 3 }
];

function Skills() {
    return (
        <div style={{padding:"0 10px",
            width:"100%",
            height: 'fit-content',
        }}>
            <Header id='myskill'>Skills</Header>
            <div className="container" >
                <SkillsContainer>
                    {skillsData.map((skill, index) => (
                        <SkillItem key={index}>
                            <h4>{skill.name}</h4>

                            <Stack spacing={1}>
                                <Rating name={`${skill.name}-rating`} defaultValue={skill.rating} precision={0.5} readOnly />
                            </Stack>
                        </SkillItem>
                    ))}
                  
                </SkillsContainer>
            </div>
        </div>
    );
}

export default Skills;

const Header = styled('h1')({
    display: 'flex',
    justifyContent: 'center',
   
   

    
});

const SkillsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '10px',
    padding: '20px 0px',
    
    
    

});

const SkillItem = styled('div')({
    textAlign: 'center',
    width: '150px',
    backgroundColor: '#FFFFFF80',
    color: 'white',
    padding:"3px",
    borderRadius: '3px',
    boxShadow:"1px 1px 10px red",
    cursor: "pointer", 

    '&:hover': { 
        transform: 'scale(1.05)', 
        boxShadow: '2px 4px 8px red',
        transition:"0.8s"
    },
    
});
