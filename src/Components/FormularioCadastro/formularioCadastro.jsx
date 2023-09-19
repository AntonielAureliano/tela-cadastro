import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" fullWidth margin="normal" />

      <TextField id="sobrenome" label="Sobrenome" fullWidth margin="normal" />

      <TextField id="cpf" label="CPF" fullWidth margin="normal" />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
