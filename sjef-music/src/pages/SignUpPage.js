import React from "react";
import { useUnprotectPage } from "../hooks/useUnprotectPage";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { signup } from "../services/user";
import logo from "../assets/logo_sjef_music.png";
import {
  SignupPageContainer,
  Logomarca,
  FormContainer,
} from "../styles/SignUpPageStyle";
import { TextField, Button } from "@material-ui/core";

const SignUpPage = () => {
  useUnprotectPage();
  const history = useHistory();
  const { form, onChange } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    signup(form, history);
  };

  return (
    <SignupPageContainer>
      <Logomarca src={logo} />
      <FormContainer onSubmit={handleSubmission}>
        <TextField
          label="Nome Completo"
          variant="outlined"
          type="name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
        />
        <TextField
          label="Apelido"
          variant="outlined"
          type="name"
          name="nickname"
          value={form.nickname}
          onChange={handleInputChange}
          required
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          required
          inputProps={{
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
          }}
        />
        <Button variant="contained" color="secondary" type="submit">
          Cadastrar
        </Button>
      </FormContainer>
    </SignupPageContainer>
  );
};

export default SignUpPage;
