import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiUsuario from "../services/usuario-api";

import './Cadastro.css';

const Cadastro = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");

    const criarUsuario = (e) => {
        e.preventDefault();

        if(!email || !username || !senha){
            alert("Favor informar e-mail, username e senha");
            return;
        }

        apiUsuario.cadastrar(email, username, senha)
            .then(resposta => {
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
                
                <input type="email" id="email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="exemplo@exemplo.com" />
            </div>

            <div className="campo">
                <label htmlFor="username">Username: </label>
                
                <input type="text" id="username" value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="karine" />
            </div>

            <div className="campo">
                <label htmlFor="senha">Senha: </label>
                
                <input type="password" id="senha" value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="123456" />
            </div>

            <button onClick={criarUsuario}>Entrar</button>

            <Link to={'/login'}>Fazer login</Link>
        </form>
    )
}

export default Cadastro;
