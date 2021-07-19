import React from "react";
import { useUnprotectPage } from "../hooks/useUnprotectPage";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { login } from "../services/user";
import logo from "../assets/logo_sjef_music.png";
import {
  LoginPageContainer,
  Logomarca,
  FormContainer,
} from "../styles/LoginPageStyle";
import { TextField, Button } from "@material-ui/core";
import { goToSignUp } from "../routes/coordinator";

const LoginPage = () => {
  useUnprotectPage();
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    login(form, history);
  };

  return (
    <LoginPageContainer>
      <Logomarca src={logo} />
      <FormContainer onSubmit={handleSubmission}>
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Entrar
        </Button>
      </FormContainer>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => goToSignUp(history)}
      >
        Não tem uma conta? Cadastre-se
      </Button>
    </LoginPageContainer>
  );
};

export default LoginPage;
