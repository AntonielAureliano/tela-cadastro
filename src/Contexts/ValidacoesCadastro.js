import React from "react";

const validacoesCadastro = React.createContext({
  cpf: semValidacoes,
  senha: semValidacoes,
  nome: semValidacoes,
});

function semValidacoes(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}

export default validacoesCadastro;
