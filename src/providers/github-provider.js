import React, {createContext, useState, useCallback} from 'react'
import api from '../services/api';


export const GithubContext = createContext({
    user: {}, 
    repositories: [],
    starred: []
});


function GithubProvider({ children }) {
    const [githubState, setGitubState] = useState({
        loading: false,
        hasUser: false,
        id: undefined,
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            location: undefined,
        },
        repositories: [],
    });


   


    const getUser = (username) =>{
        setGitubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`)
            .then(({data}) => {
                setGitubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user:{
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        location: data.location,
                    }
                }))
            }).finally(() => {
                setGitubState((prevState) => ({
                  ...prevState,
                  loading: !prevState.loading,
                }));
              });
            
    }
    

    const getUserRepos = (username) =>{
        api.get(`users/${username}/repos`)
            .then(({data}) => {
                setGitubState(prevState => ({
                    ...prevState,
                    repositories:data,
            }))
        })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
    }

    return (
        
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider
