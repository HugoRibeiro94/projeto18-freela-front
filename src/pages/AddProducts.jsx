import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Button, Container, Input } from "../style/StyleInicio";
import axios from "axios";
import { useContext, useState } from "react";
import Context from "../Context";

export default function AddProducts(){

    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [desabilitar,setDesabilitar] = useState(false);
    const [cadastro, setCadastro] = useState(null);
    const {token, setToken} = useContext(Context);

    const navigate = useNavigate();

    function registerProduct(event){

        event.preventDefault();

        setDesabilitar(true);

        const newRegister = {
            name: name,
            image: image,
            description: description,
            price: price
        }

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/products`,newRegister,config);
        promise.then((resposta) => {
            console.log(resposta);
            setCadastro(resposta.data);
            setDesabilitar(true); 
            navigate('/home-page')
        });
        promise.catch( erro => { 
            alert(erro.response.data),
            setDesabilitar(false)});
    }
    return(
        <>
            <Header/>
            <Container>
                <Input
                    type="text"
                    placeholder="nome"
                    onChange={ e => setName(e.target.value)}
                    value={name}
                    required
                    disabled={desabilitar}
                />
                <Input
                    type="url"
                    placeholder="imagem"
                    onChange={ e => setImage(e.target.value)}
                    value={image}
                    required
                    disabled={desabilitar}
                />
                <Input
                    type="text"
                    placeholder="descrição"
                    onChange={ e => setDescription(e.target.value)}
                    value={description}
                    required
                    disabled={desabilitar}
                />
                <Input
                    type="number"
                    placeholder="preço"
                    onChange={ e => setPrice(e.target.value)}
                    value={price}
                    required
                    disabled={desabilitar}
                />
                <Button onClick={registerProduct} disabled={desabilitar}>Cadastrar Produto</Button>
            </Container>
        </>
    )
}