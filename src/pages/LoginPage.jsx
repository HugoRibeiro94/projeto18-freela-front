import { Link, useNavigate } from "react-router-dom"
import {Button, ButtonRetorno,Container,Input} from "./../style/StyleInicio"
import { useContext, useState } from "react";
import axios from "axios";
import Context from "../Context";

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [desabilitar,setDesabilitar] = useState(false);
    const {token, setToken} = useContext(Context);

    const navigate = useNavigate();

    function logar(event){

        event.preventDefault();

        setDesabilitar(true);

        const login = {
            email: email,
            password: password
        }

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-in`,login);
        promise.then((resposta) => { 
            setDesabilitar(true);
            setToken(resposta.data.token);
            console.log(resposta);
        });
        promise.catch( erro => {
            alert(erro.response.data.message), 
            setDesabilitar(false)
        }); 
        
    }

    return(
        <>
            <Container>
                
                    <Input
                        type="email"
                        placeholder="email"
                        onChange={ e => setEmail(e.target.value)}
                        value={email}
                        disabled={desabilitar}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="senha"
                        onChange={ e => setPassword(e.target.value)}
                        value={password}
                        disabled={desabilitar}
                        required
                    />
                    <Button onClick={logar} disabled={desabilitar}>Entrar</Button>
                <Link to="/cadastro">
                    <ButtonRetorno>Não tem uma conta? Cadastre-se!</ButtonRetorno>
                </Link>
            </Container>
        </>
    )
}
