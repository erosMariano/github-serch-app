import React, {useState, useEffect} from 'react'
import Card from '../card';
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";


function Profile() {

    const {githubState, getUserRepos} = useGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)
    useEffect(() =>{
        if(!!githubState.user.login){
            getUserRepos(githubState.user.login)
        }
        sethasUserForSearchRepos(!!githubState.repositories)
    }, [githubState.user])

    return (
        <S.ContainerProfile>
        
            <S.Profile>
                <img src={githubState.user.avatar} alt="Foto de perfil" />
            
                <S.TextProfile>
                    <h3>{githubState.user.name}</h3>
                    <p>Username: <span><a target="_blank" rel="noreferrer" href={githubState.user.html_url}>{githubState.user.login}</a></span></p>
                    <p>Location: <span>{githubState.user.location}</span></p>
                </S.TextProfile>
            </S.Profile>


            <S.ContainerCard>

                
                {githubState.repositories.map((repos) =>{
                    return(
                        <React.Fragment key={repos.id}>
                            <Card  name={repos.name} linkToRepo={repos.html_url} fullName={repos.full_name}/>   
                        </React.Fragment>                      
                    )
                })}
            </S.ContainerCard>


        </S.ContainerProfile>
    )
}

export default Profile
