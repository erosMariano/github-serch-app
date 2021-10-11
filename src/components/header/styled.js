import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top:90px;

    .textHeader{
        text-align: center;
        color: #fff;
        p{
            font-weight: 400;
            font-size: 32px;
            margin-bottom:20px;

            span{
                font-weight: 600;
            }
        }

        h1{
            font-size: 48px;
            text-shadow: 0px -27px 413px rgba(89, 83, 251, 0.84), 0px -12.4829px 190.942px rgba(89, 83, 251, 0.623007), 0px -7.14244px 109.253px rgba(89, 83, 251, 0.526496), 0px -4.33541px 66.3157px rgba(89, 83, 251, 0.453556), 0px -2.61228px 39.9581px rgba(89, 83, 251, 0.386444), 0px -1.45468px 22.2513px rgba(89, 83, 251, 0.313504), 0px -0.62565px 9.57012px rgba(89, 83, 251, 0.216993);
            font-weight: 400;

            span{
                font-weight: 600;
            }
        }
    }

    .buttons{
        color: #fff;
        display: flex;
        margin-top: 40px;
        a{
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-sizing: border-box;
            border-radius: 30px;
            height: 50px;
            display: flex;

            justify-content: space-between;
            align-items: center;
            width: 170px;
            padding-right: 10px;
            padding-left: 10px;
            position: relative;

            transition: .3s;

            &:hover{
                background: rgba(255, 255, 255, 0.5);
            }
        }
        .btn-git{
            &::after{
                content: "";
                position: absolute;
                width: 72px;
                height: 72px;
                left: 0px;

                background: #D811A0;
                filter: blur(79.2667px);
            }

            &::before{
                content: "";
                position: absolute;
                width: 72px;
                height: 72px;
                right: 0px;

                background: #8161E6;
                filter: blur(79.2667px);
            }
        }
        .figma-btn{
            width: 50px;
            height: 50px;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
        }
        
    }


    label{
        width: 400px;
        display: flex;
        position: relative;
        align-items: center;
        margin-top: 140px;

        flex-direction: column;
        img{
            position: absolute;
            left: 24px;
            top: 13px;
        }

        input   {
            width:100%;
            font-size:20px;
            font-weight: 400;

            height: 50px;

            background: rgba(255, 255, 255, 0.23);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-sizing: border-box;
            border-radius: 30px;

            padding-left: 60px;
            color: rgba(139,195,248,.61);

            &::-webkit-input-placeholder{
                color: rgba(139,195,248,.61);
            }
        }

        button{
            background: linear-gradient(75.96deg,#9476F9 0%,#6A79FC 46.7%,#3B7CFE 100%);
            border: 2px solid transparent;
            color: #fff;

            width: 100%;
            max-width: 200px;
            border-radius:100px;
            height: 50px;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 24px;

            transition: .3s;
            font-weight: 500;
            font-size:1.3rem;


            &:hover{
                border: 2px solid rgba(255, 255, 255, 0.2);
            }
        }
    }
`;