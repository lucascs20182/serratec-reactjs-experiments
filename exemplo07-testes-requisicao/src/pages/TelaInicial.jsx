import React, { useState, useEffect } from "react";

import apiProduto from "../services/produto-api";
import utilStorage from "../utils/storage.js";

import Produto from '../components/Produto';

import { CardContainer } from '../styles/card';

const TelaInicial = () => {
    const [produtos, setProdutos] = useState([]);

    const recuperarProdutos = () => {

        apiProduto.obterTodos()
            .then(resposta => {
                setProdutos(resposta.data);
            })
            .catch(erro => {
                alert("Erro ao listar produtos! Verifique o console.")
                console.log(erro);
            })
    }

    useEffect(() => {

        let token = utilStorage.obterTokenDaStorage();

        if (!token) {
            window.open("/login", "_self");
            return;
        }

        recuperarProdutos();
    }, []);

    return (
        <CardContainer >
            {
                produtos.length == 0 ? "Não há produtos cadastrados" : ""
            }

            {produtos.map(produto => (
                <Produto key={produto.id}>{produto}</Produto>
            ))}
        </CardContainer>
    )
}

export default TelaInicial;
