import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiUsuario from "../services/usuario-api";
import utilStorage from "../utils/storage.js";

import './Login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");

    const efetuarLogin = (e) => {
        e.preventDefault();

        if(!username || !senha){
            alert("Favor informar username e senha");
            return;
        }

        apiUsuario.logar(username, senha)
            .then(resposta => {
                console.log(resposta)

                const { Authorization } = resposta.data;
                utilStorage.salvarTokenNaStorage(Authorization);
                window.open("/", "_self");
            })
            .catch(erro => {
                alert("Erro! Verifique o console.")
                console.log(erro);
            })
    }

    return (
        <form>
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

            <button onClick={efetuarLogin}>Entrar</button>

            <Link to={'/cadastro'}>Se cadastrar</Link>
        </form>
    )
}

export default Login;
