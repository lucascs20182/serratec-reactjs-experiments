import React from 'react';
import Produto from "../../../model/Produto";
import { Link } from "react-router-dom";

import api from "../../../service/api";

import "./index.css";

export default class CadastroProduto extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            quantidade: '',
            valor: '',
            urlImagem: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    async handleSubmit(event) {

        event.preventDefault();

        const produto = new Produto({
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            valor: this.state.valor,
            urlImagem: this.state.urlImagem
        });

        try {
            const resposta = await api.post("/api/produtos", produto);
            console.log(resposta);
            alert("Produto cadastrado com sucesso!");

            // Limpa os campos
            this.setState({
                nome: '',
                quantidade: '',
                valor: '',
                urlImagem: ''
            });

        } catch (error) {
            console.log(error);
            alert("Ops, não foi possivel cadastrar este produto.");
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="grupo">
                        <label htmlFor="nome">Nome:</label>
                        <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
                    </div>

                    <div className="grupo">
                        <label htmlFor="quantidade">Quantidade:</label>
                        <input name="quantidade" type="number" value={this.state.quantidade} onChange={this.handleChange} />
                    </div>

                    <div className="grupo">
                        <label htmlFor="valor">Valor:</label>
                        <input name="valor" type="text" value={this.state.valor} onChange={this.handleChange} />
                    </div>

                    <div className="grupo">
                        <label htmlFor="url">Url da imagem:</label>
                        <input name="urlImagem" type="text" value={this.state.urlImagem} onChange={this.handleChange} />
                    </div>

                    <div className="grupo">
                        <input type="submit" value="Cadastrar" />
                        <input type="reset" value="Limpar" />
                    </div>
                </form>

                <Link to={"/produtos"}>Voltar para produtos</Link>
            </>
        );
    }
}
