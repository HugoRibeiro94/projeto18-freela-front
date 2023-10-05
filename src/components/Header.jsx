import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(){
    return(
        <>
        <Menu>
            <Link to="/to-manage">
                Gerenciar
            </Link>
            <Link to="/home-page">
                Tela Inicial
            </Link>
            <Link to="/add-products">
                Adicionar Produtos
            </Link>
        </Menu>
        </>
    )
}

const Menu = styled.div`
    width: 100%;
    height: 50px;
    background-color: aqua;
`