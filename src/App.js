import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro/formularioCadastro.jsx";
import { Container, Typography } from "@mui/material";
import { validarCPF, validarSenha } from "./Models/cadastro";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validacoes={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarSenha,
          }}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
