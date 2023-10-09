import { styled } from "styled-components"
const Container = styled.div`
    margin-top: 100px;
    height:500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: solid 1px rgba(212, 212, 212, 1);
    color:  black;
    background-color:rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: black;
    font-weight: 400;
    font-size: 20.98px;
    line-height: 26.22px;
    color: rgba(255, 255, 255, 1);
`
const ButtonRetorno = styled.button`
    width: 250px;
    font-weight: 400;
    font-size: 13.98px;
    line-height: 17.47px;
    text-align: center;
    color: black;
    border:none;
    background-color: rgba(255, 255, 255, 1);
    
`
const Titulo = styled.div`
        margin-top: 100px ;
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: 40px;
    `

const Itens = styled.ul`
width: 100%;
height: 100%;
margin-top: 100px;
background-color: #FFFF;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`
export {Button, ButtonRetorno,Container,Input,Titulo, Itens}