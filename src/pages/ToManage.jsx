import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import axios from "axios";
import Products from "../components/Products";
import styled from "styled-components";
import Header from "../components/Header";
import ActiveProducts from "../components/ActiveProducts";
import { Titulo, Itens } from "../style/StyleInicio";

export default function ToManage(){
    const {products, setProducts} = useContext(Context)
    const {token, setToken} = useContext(Context);
    const{ activeProduct, setActiveProduct} = useContext(Context);

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
        const promise = axios.get(`${import.meta.env.VITE_API_URL}/all-products`,config);
            promise.then(resposta => {
                console.log(resposta.data);
                setActiveProduct(resposta.data);
            });
            promise.catch( erro => console.log(erro) );
    }, [])

    return (
        <>
            <Header/>
    
            <Titulo>Gerenciar Itens</Titulo>
    
            <Itens>
                {activeProduct.map( (item) => 
                    <ActiveProducts
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        isActive={item.isActive}
                    />
                )}
            </Itens>
            </>
        )
    }
    

  