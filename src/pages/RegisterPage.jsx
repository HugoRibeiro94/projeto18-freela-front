import { Link, useNavigate } from "react-router-dom"
import {Button, ButtonRetorno,Container,Input} from "./../style/StyleInicio"
import { useContext, useState } from "react"
import axios from "axios";
import Context from "../Context";

export default function RegisterPage(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");
    const [desabilitar,setDesabilitar] = useState(false);
    const [cadastro, setCadastro] = useState(null);

    const navigate = useNavigate();

    function cadastrar(event){

        event.preventDefault();

        if(confirmPassword !== password){
            return alert ("senha não confirmada")
        }

        setDesabilitar(true);

        const novoCadastro = {
            email: email,
            name: name,
            phone: phone,
            cpf: cpf,
            password: password,
            confirmPassword: confirmPassword
        }

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-up`,novoCadastro);
        promise.then((resposta) => {
            console.log(resposta);
            setCadastro(resposta.data);
            setDesabilitar(true); 
            navigate('/')
        });
        promise.catch( erro => { 
            alert(erro.response.data.message),
            setDesabilitar(false)});
    }
   
    return(
        <>
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
                        type="number"
                        placeholder="telefone"
                        onChange={ e => setPhone(e.target.value)}
                        value={phone}
                        required
                        disabled={desabilitar}
                    />
                    <Input
                        type="number"
                        placeholder="cpf"
                        onChange={ e => setCpf(e.target.value)}
                        value={cpf}
                        required
                        disabled={desabilitar}
                    />
                   <Input
                        type="email"
                        placeholder="email"
                        onChange={ e => setEmail(e.target.value)}
                        value={email}
                        required
                        disabled={desabilitar}
                    />
                   <Input
                        type="password"
                        placeholder="senha"
                        onChange={ e => setPassword(e.target.value)}
                        value={password}
                        required
                        disabled={desabilitar}
                    />
                    <Input
                        type="password"
                        placeholder="confirme a senha"
                        onChange={ e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                        disabled={desabilitar}
                    />
                    <Button onClick={cadastrar} disabled={desabilitar}>Cadastrar</Button>
                
                <Link to="/">
                    <ButtonRetorno>Já tem uma conta? Faça login!</ButtonRetorno>
                </Link>
            </Container>
        </>
    )
}