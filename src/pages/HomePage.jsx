import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Products from "../components/Products";
import Header from "../components/Header";
import Context from "../Context";

export default function HomePage(){

    const [products, setProducts] = useState([])
    const {token, setToken} = useContext(Context);

    const navigate = useNavigate();

    const config = {
        headers: {
        Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if (!token){
        navigate("/")
        }
        const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`,config);
            promise.then(resposta => {
                console.log(resposta.data);
                setProducts(resposta.data);
            });
            promise.catch( erro => console.log(erro) );
    }, [])

    return (
        <>
            <Header/>

            Itens Disponíveis

            <Itens>
                {products.map( (item) => 
                    <Products
                        key={item.id}
                        description={item.description}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                )}
            </Itens>
        </>
    )
}

const Itens = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 70px;
    background-color: blueviolet;
`