import React,  { useState, useEffect} from 'react'
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

function Header() {
	const { getUser }  = useGithub();
	const [userNameForSearch, setUserNameForSearch] = useState()
	const { githubState } = useGithub();
	
	const submitGetUser = () =>{
		if(!userNameForSearch) return;
		return getUser(userNameForSearch);
	}


	useEffect(() => {


    }, [githubState])

    return (
       		<S.Header>
				<div className="textHeader">
					<p><span>Pesquise</span> qualquer usuário no</p>
					<h1><span>GitHub</span> Search</h1>
				</div>

				<div className="buttons">
					<a href="/" className="btn-git">Ver repositório <img alt="icone github" src="images/github-icon-1.svg" /></a>
					<a href="/" className="figma-btn"><img alt="icone do figma" src="images/figma-icon.svg" /></a>
				</div>

				<label htmlFor="#">
					<img src="images/lupa-icon-blue.svg" alt="Icone de imagem" />
					<input type="text" placeholder="Pesquise por usuário" onChange={(event) => setUserNameForSearch(event.target.value)}/>
					<button type="submit" onClick={submitGetUser}>Procurar</button>
				</label>

			</S.Header>
    )
}

export default Header
