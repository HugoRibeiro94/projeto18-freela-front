import styled from "styled-components"
import Context from "../Context";
import { useContext, useState } from "react";
import axios from "axios";

export default function ActiveProducts(props){
    const {id, name, description, image, price} = props
    console.log(id);

    const {token, setToken} = useContext(Context);

 

    function disabledProduct(id){
        console.log(id);
        
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }

        const promise = axios.put(`${import.meta.env.VITE_API_URL}/products/${id}`,config);
        promise.then((resposta) => {
            console.log(resposta.data);
        });
        promise.catch( erro => { 
            console.log();(erro.response.data)
        });
    }

    return(
        <>
            <ListProductContainer>
                <div>
                    <img src={image} />
                    <h1><strong>{name}</strong></h1>
                    <p>Descrição: {description}</p>
                    <p>Preço: {price}</p>
                </div>
        
                <button onClick={() => disabledProduct(id)}>Ativar/Desativar</button>
                
          </ListProductContainer>
        </>
    )
}

const ListProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: #000000;
    margin-bottom: 100px;
    p{
        font-size: 20x;
    }
    img{
        width: 200px;
        height:200px;
    }
   
`