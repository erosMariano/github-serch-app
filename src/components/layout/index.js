import React from 'react'
import Header from '../header'
import Profile from '../profile';
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

function Layout() {
	const { githubState } = useGithub();

	return (
		<S.Main>
			<Header/>
			{githubState.hasUser ? 
				<Profile/> : 
				<p className="pesquise">
					Pesquise usuário
					<span>.</span>
					<span>.</span>
					<span>.</span>
				</p>
			}
			
		</S.Main>
	)
}

export default Layout
  