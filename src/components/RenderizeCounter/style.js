import styled from "styled-components"

export const Container = styled.div`
    background: #2c3e50;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    border-radius: 8px;
    color: aqua;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    :hover {
        background: #34495e
    }
    span{
        display: block;
        font-family:Helvetica, sans-serif;
        font-size: 36px;
        margin: 15px;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);

    }
    span:hover{
        color: #fff;
        cursor: pointer;
    }
    div {
        margin: 10px;
        padding: 10px;

        button {
            margin: 10px;
            width: 50px;
            height: 50px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
            border: 2px transparent;
            border-radius: 50%;
            font-size: 25px;
            color: aqua;
            background: rebeccapurple;
            cursor: pointer;
        }
        button:active {
            opacity: 0.7;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            transform: translateY(3px);
        }
    }


`