import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import logo from "../assets/logo_sjef_music.png";
import {
  AddMusicPageContainer,
  Logomarca,
  FormContainer,
} from "../styles/AddMusicPageStyle";
import { TextField, Button } from "@material-ui/core";
import { addMusic } from "../services/music";

const AddMusicPage = () => {
  useProtectPage();
  const history = useHistory();
  const { form, onChange } = useForm({
    title: "",
    author: "",
    file: "",
    genre: "",
    album: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log("Body no handle:", form);
    addMusic(form, history);
  };

  return (
    <AddMusicPageContainer>
      <Logomarca src={logo} />
      <FormContainer onSubmit={handleSubmission}>
        <TextField
          label="URL do YouTube"
          variant="outlined"
          required
          name="file"
          value={form.file}
          onChange={handleInputChange}
        />
        <TextField
          label="Título da Música"
          variant="outlined"
          required
          name="title"
          value={form.title}
          onChange={handleInputChange}
        />
        <TextField
          label="Artista"
          variant="outlined"
          required
          name="author"
          value={form.author}
          onChange={handleInputChange}
        />
        <TextField
          label="Álbum"
          variant="outlined"
          required
          name="album"
          value={form.album}
          onChange={handleInputChange}
        />
        <TextField
          label="Gêneros"
          variant="outlined"
          required
          name="genre"
          value={form.genre}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="secondary" type="submit">
          Cadastrar Música
        </Button>
      </FormContainer>
    </AddMusicPageContainer>
  );
};

export default AddMusicPage;
