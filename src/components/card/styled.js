import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    width: 300px;
    height: 150px;
    overflow: hidden;

    background: linear-gradient(75.96deg, #9476F9 0%, #6A79FC 46.7%, #3B7CFE 100%);
    border-radius: 18px;
    margin-right: 24px;
    margin-top: 54px;
    

    >img{
        position: absolute;
        right: 18px;
        top: 18px;
        right: -119px;
        top: -105px;
        
    }

    .text-card{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        padding: 0px 30px;
        text-align: center;
        

        h3{
            font-weight: bold;
            font-size: 1.6rem;
            line-height: 27px;
            margin-bottom: 10.5px;
            color: #FFFFFF;
        }

        a{
            z-index: 1000;
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 20px;
            color: #FFFFFF;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`