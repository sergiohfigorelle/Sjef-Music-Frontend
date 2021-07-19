import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/apiConstants";
import logo from "../assets/logo_sjef_music.png";
import {
  MusicDetailPageContainer,
  Logomarca,
  CardStyled,
  ButtonStyled,
} from "../styles/MusicDetailPageStyle";
import { Fab, CardContent, Typography } from "@material-ui/core";
import { Delete, YouTube } from "@material-ui/icons";
import { deleteMusic } from "../services/music";

const MusicDetailPage = () => {
  useProtectPage();
  const history = useHistory();
  const params = useParams();
  const { data } = useRequestData(`${BASE_URL}/music/${params.id}`, []);
  const musicDetails = data.music;

  return (
    <MusicDetailPageContainer>
      {musicDetails && (
        <>
          <Logomarca src={logo} />
          <CardStyled>
            <Fab
              size="small"
              color="secondary"
              href={musicDetails.file}
              target="_blank"
            >
              <YouTube />
            </Fab>
            <CardContent>
              <Typography variant="h7" component="h2" gutterBottom>
                {musicDetails.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Autor: {musicDetails.author}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Data de Cadastro:{" "}
                {new Date(musicDetails.date).toLocaleDateString()}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Álbum: {musicDetails.album}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Gêneros: {musicDetails.genre}
              </Typography>
            </CardContent>
          </CardStyled>
          <ButtonStyled
            variant="contained"
            color="secondary"
            aria-label="add"
            onClick={() => deleteMusic(params.id, history)}
          >
            <Delete />
            <div>Deletar Música</div>
          </ButtonStyled>
        </>
      )}
    </MusicDetailPageContainer>
  );
};

export default MusicDetailPage;
