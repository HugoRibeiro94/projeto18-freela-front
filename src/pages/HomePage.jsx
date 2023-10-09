import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Products from "../components/Products";
import Header from "../components/Header";
import Context from "../Context";
import { Itens, Titulo } from "../style/StyleInicio";

export default function HomePage(){

    const {products, setProducts} = useContext(Context)
    const {token, setToken} = useContext(Context);
    const {activeProduct, setActiveProduct} = useContext(Context);

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

            <Titulo>Itens Disponíveis</Titulo>

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

