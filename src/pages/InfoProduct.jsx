import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../style/StyleInicio";

export default function InfoProduct(){

    const {idProduct} = useParams();

    const [productSelecionado, setProductSelecionado] = useState([])

    useEffect(() =>{
        const promise = axios.get(`${import.meta.env.VITE_API_URL}/products/${idProduct}`);

        promise.then( (resposta) => {
            console.log(resposta.data);
            setProductSelecionado(resposta.data)
        });

        promise.catch( (erro) => {
            console.log(erro.response.data)
        });

    },[]);

    return(
        <> 
            <Container>
                <img src={productSelecionado.image}/>
                <h1>{productSelecionado.name} - {productSelecionado.description}</h1>
                <h2>Nome: {productSelecionado.nameUsuario}</h2>
                <h3>Telefone: {productSelecionado.phone}</h3>
            </Container>
        </>
    )
}