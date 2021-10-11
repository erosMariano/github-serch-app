import React from 'react'
import App from './App';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/github-provider';

function Providers({children}) {
    return (
        <GithubProvider>
            <ResetCSS/>
            <App/>
        </GithubProvider>
    )
}

export default Providers
