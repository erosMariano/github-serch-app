import styled from "styled-components";

export const Main = styled.main`
    background-color: #0E132F;
    min-height:100vh;
    height:auto;
    width:100%;
    overflow: hidden;
    .pesquise{
        color: #fff;
        font-size: 3rem;
        font-weight: bold;
        margin-top: 80px;
        text-align:center;
        span{
            position: relative;
        }
        span:nth-child(1){
            animation: .5s animatee infinite alternate ; 
        }

        span:nth-child(2){
            animation: .5s animatee infinite alternate ;
            animation-delay: .25s;
        }

        span:nth-child(3){
            animation: .5s animatee infinite alternate ;
            animation-delay: .4s;
        }

    }
    @keyframes animatee {
        to{
            top: -5px;
        }
        from{
            top: 0px;
        }
    }

`;

