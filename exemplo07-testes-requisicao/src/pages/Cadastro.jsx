import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiUsuario from "../services/usuario-api";

import './Cadastro.css';

const Cadastro = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const criarUsuario = (e) => {
        e.preventDefault();

        if(!email || !username || !senha || !nome || !cpf || !cep
            || !numero){
                alert("Complemento é opcional. Favor, informar todos os demais campos");
                return;
        }

        apiUsuario.cadastrar(email, username, senha, nome, cpf, cep, numero, complemento)
            .then(resposta => {
                console.log(resposta)
                alert("Usuário cadastrado!")
                window.open("/login", "_self")
            })
            .catch(erro => {
                alert("Erro! Verifique o console.")
                console.log(erro);
            })
    }

    return (
        <form>
            <div className="campo">
                <label htmlFor="email">E-mail: </label>
                
                <input required type="email" id="email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="exemplo@exemplo.com" />
            </div>

            <div className="campo">
                <label htmlFor="username">Username: </label>
                
                <input required type="text" id="username" value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="karine" />
            </div>

            <div className="campo">
                <label htmlFor="senha">Senha: </label>
                
                <input required type="password" id="senha" value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="123456" />
            </div>

            <div className="campo">
                <label htmlFor="nome">Nome: </label>
                
                <input required type="text" id="nome" value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Karine Escobar" />
            </div>

            <div className="campo">
                <label htmlFor="cpf">CPF: </label>
                
                <input required type="text" id="cpf" value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="12632129190" />
            </div>

            <div className="campo">
                <label htmlFor="cep">CEP: </label>
                
                <input required type="text" id="cep" value={cep}
                    onChange={e => setCep(e.target.value)}
                    placeholder="25780000" />
            </div>

            <div className="campo">
                <label htmlFor="numero">Número da casa: </label>
                
                <input required type="text" id="numero" value={numero}
                    onChange={e => setNumero(e.target.value)}
                    placeholder="281" />
            </div>

            <div className="campo">
                <label htmlFor="complemento">Complemento: </label>
                
                <input required type="text" id="complemento" value={complemento}
                    onChange={e => setComplemento(e.target.value)}
                    placeholder="sei la" />
            </div>

            <button onClick={criarUsuario}>Cadastrar</button>

            <Link to={'/login'}>Fazer login</Link>
        </form>
    )
}

export default Cadastro;
