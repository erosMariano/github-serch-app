import React, {useEffect, useState} from 'react'
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";


function Card({ name, linkToRepo, fullName, key}) {
    const {githubState, getUserRepos} = useGithub();

    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)
    useEffect(() =>{
        if(!!githubState.user.login){
            getUserRepos(githubState.user.login)
        }
        sethasUserForSearchRepos(!!githubState.repositories)
    }, [])



    return (
        <>
            {hasUserForSearchRepos ? 
            <S.CardContainer>
                {console.log(key)}
                <img src="images/github-icon-neon.svg" alt=""/>

                <div className="text-card">
                    <h3>{name}</h3>
                    <a target="_blank" rel="noreferrer" href={linkToRepo}>{fullName}</a>
                </div>rel="noop
            </S.CardContainer> 
            :
                <></>
            }
        </>
    )
}

export default Card
