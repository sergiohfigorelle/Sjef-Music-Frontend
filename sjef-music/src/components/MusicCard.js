import { useHistory } from "react-router-dom";
import { CardStyled } from "../styles/MusicCardStyle";
import { CardContent, Fab, Typography } from "@material-ui/core";
import { goToMusicDetail } from "../routes/coordinator";
import YouTube from "@material-ui/icons/YouTube";

const MusicCard = (props) => {
  const history = useHistory();

  return (
    <CardStyled>
      <CardContent onClick={() => goToMusicDetail(history, props.id)}>
        <Fab size="small" color="secondary" href={props.file} target="_blank">
          <YouTube />
        </Fab>
        <Typography variant="h7" component="h3">
          {props.title}
        </Typography>
      </CardContent>
    </CardStyled>
  );
};

export default MusicCard;
