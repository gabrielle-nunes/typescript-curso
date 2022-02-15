import Negociacao from "../models/negociacao.js";
import { NegociacoesDoDia } from "./../Interfaces/negociacao-do-dia.js";

export class NegociacoesService {

  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map((dadosDeHoje) => {
          return new Negociacao(
            new Date(),
            dadosDeHoje.vezes,
            dadosDeHoje.montante
          )
        })
      });
  }
}
