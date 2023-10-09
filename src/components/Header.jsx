import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/StyleInicio";

export default function Header(){
    return(
        <>
        <Menu>
            <Link to="/to-manage">
                <button>Gerenciar</button>
            </Link>
            <Link to="/home-page">
                <button>Tela Inicial</button>
            </Link>
            <Link to="/add-products">
                <button>Adicionar Produtos</button>
            </Link>
        </Menu>
        </>
    )
}

const Menu = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button{
        font-size: 20px;
        border: none;
        background-color: #FFFF;
        border-radius: 5px;
    }
`