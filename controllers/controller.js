const express = require('express')
const router = express.Router()

const cervejaria = [
    { id: 1, nome: "Heineken", abv: 4.5, tipo: "Lager", nacionalidade: "Holanda" },
    { id: 2, nome: "Corona", abv: 5.2, tipo: "Pielsen", nacionalidade: "México" },
    { id: 3, nome: "Patagônia", abv: 4.2, tipo: "Amber Ale", nacionalidade: "Argentina" },
    { id: 4, nome: "Saint Beer", abv: 3.5, tipo: "IPA", nacionalidade: "Brasil" },
    { id: 5, nome: "Duff Beer", abv: 3.5, tipo: "Pielsen", nacionalidade: "EUA" },
    { id: 6, nome: "Coruja", abv: 3.5, tipo: "Lager", nacionalidade: "Brasil" },
    { id: 7, nome: "Brugse Zot ", abv: 6.2, tipo: "IPA", nacionalidade: "Bélgica" },
]


const procuraCerveja = async (req, res) => {
    try {
        const nomeCerveja = req.params.nome;

        const result = cervejaria.filter(c => c.nome.toLowerCase().includes(nomeCerveja.toLowerCase()));

        if (result.length === 0) {
            return res.status(204).json({ message: "nome da cerveja encontrado" })
        }
        res.status(200).json({ cervejaria: result });

        return nomeCerveja

    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json('erro  interno')

    }
}

const procuraNacionalidade = async (req, res) => {
    try {
        const { nacionalidade } = req.params

        const result = cervejaria.filter(c => c.nacionalidade.toLowerCase() === (nacionalidade.toLowerCase()));

        res.status(200).json(result);

    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json('erro  interno')

    }
}

const maiorAbv = async (req, res) => {
    const ordenar = [...cervejaria].sort((a, b) => a.abv - b.abv)
    res.status(200).json(ordenar)
}

const buscarTipo = async (req, res) => {
    const { tipo } = req.params
    const result = cervejaria.filter(c => c.tipo.toLowerCase() === (tipo.toLowerCase()));
    res.status(200).json(result);
}

const procuraNomeParcial = async (req, res) => {
    const { nome } = req.params
    const result = cervejaria.filter(c =>
        c.nome.toLowerCase().includes(nome.toLowerCase())
    );
    res.status(200).json(result);

}


module.exports = { procuraCerveja, procuraNacionalidade, maiorAbv, buscarTipo, procuraNomeParcial }