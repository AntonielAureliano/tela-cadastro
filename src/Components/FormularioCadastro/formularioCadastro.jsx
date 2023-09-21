import React, { useState } from "react";
import DadosPessoais from "../../DadosPessoais";
import DadosUsuario from "../../DadosUsuario";
import DadosEntrega from "../../DadosEntrega";
import { Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(1);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

//<DadosEntrega />
//<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
//

export default FormularioCadastro;
