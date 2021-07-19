import React from "react";
import { useProtectPage } from "../hooks/useProtectPage";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/apiConstants";
import logo from "../assets/logo_sjef_music.png";
import {
  MusicFeedPageContainer,
  Logomarca,
  ButtonStyled,
  CardContainer,
} from "../styles/MusicFeedPageStyle";
import AddAPhotoIcon from "@material-ui/icons/QueueMusic";
import MusicCard from "../components/MusicCard";
import { goToAddMusic } from "../routes/coordinator";

const MusicFeedPage = () => {
  useProtectPage();
  const history = useHistory();

  const { data } = useRequestData(`${BASE_URL}/music`, []);

  const musics = data.musics;

  const orderMusics =
    musics && musics.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

  return (
    <MusicFeedPageContainer>
      <Logomarca src={logo} />
      <ButtonStyled
        variant="contained"
        color="secondary"
        aria-label="add"
        onClick={() => goToAddMusic(history)}
      >
        <AddAPhotoIcon />
        <div>Adicionar Música</div>
      </ButtonStyled>
      <CardContainer>
        {musics &&
          orderMusics.map((music) => {
            return (
              <MusicCard
                key={music.id}
                id={music.id}
                title={music.title}
                file={music.file}
              />
            );
          })}
      </CardContainer>
    </MusicFeedPageContainer>
  );
};

export default MusicFeedPage;
