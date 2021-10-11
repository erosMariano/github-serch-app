import styled from "styled-components";

export const ContainerProfile = styled.section`
    padding-top: 40px;
    padding-bottom: 20px;

    max-width:1593px;
    margin: 0 auto;
    margin-top: 48px;

    display: flex;
    justify-content: space-between;
`

export const Profile = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 54px;

    img{
        width: 141px;
        height: 141px;
        border-radius: 100%;
        object-fit:cover;
        margin-right: 20px;
    }
`

export const TextProfile = styled.div`
    color: #fff;
    h3{
        font-weight: bold;
        font-size: 36px;
        line-height: 54px;
    }

    p{
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        margin-top: 10px;
        span{
            font-weight: 400;
            margin-left: 16px;
        }
    }
    
    a{
        text-decoration: underline;
    }
`;

export const ContainerCard = styled.aside`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    overflow-y: scroll;
    height: 500px;


    ::-webkit-scrollbar {
    width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .2); 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
    }

`