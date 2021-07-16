
import MainGrid from '../src/componentes/maingrid'
import Box from '../src/componentes/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper} from '../src/componentes/ProfileRelations';

function ProfileSidebar(props) {
  console.log (props);
  return (
    <Box>
         <img src={`https://github.com/${props.githubUser}.png`} style= {{ borderRadius:'8px'}} />
    </Box>
  )
}

export default function Home() {
     const githubUser = 'LuizaSantana';
     const pessoasFavoritas = [
       'juunegreiros',
       'omariosouto', 
       'peas',
       'rafaballerini', 
       'marcobrunodev',
       'felipefialho', 
     ]


  return (
      <>
    <AlurakutMenu />
  <MainGrid>
  
    {/* <Box style="grid-area: profileArea;"> */}
    <div className="profileArea" style={{ gridArea: 'profileArea'}}>
      <ProfileSidebar githubUser= {githubUser} />
    </div>
    
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
       <Box>
         <h1 className="title">
         Bem vindo
         </h1>


         <OrkutNostalgicIconSet />
       </Box>
    </div>
    
    <div className="RelationsArea" style={{ gridArea: 'RelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
         Pessoas da comunidade ({pessoasFavoritas.length})
         </h2>

         <ul>

         {pessoasFavoritas.map((itemAtual)=>{

          return (
            <li>
             <a href={`/users/${itemAtual}`} key={itemAtual}>
               <img src={`https://github.com/${itemAtual}.png`} />
               <span>{itemAtual}</span>
               </a>
               </li>
          )
         })}
         </ul>
      </ProfileRelationsBoxWrapper>
      <Box>
         Comunidades
      </Box>
    </div>

  </MainGrid>
  </>
  )
}
