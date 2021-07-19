import { useHistory } from "react-router-dom";
import { useContext } from "react";
import GlobalStateContext from "../globalContext/GlobalStateContext";
import { AppBar, ButtonsContainer } from "../styles/MainAppStyle";
import { Toolbar, Button } from "@material-ui/core";
import { goToMusicFeed } from "../routes/coordinator";

const MainApp = () => {
  const history = useHistory();
  const { labelLog, setLabelLog } = useContext(GlobalStateContext);

  const goToLogin = (history) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLabelLog("Login");
    history.push("/login");
  };

  return (
    <AppBar>
      <Toolbar>
        <ButtonsContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToMusicFeed(history)}
          >
            Músicas Recentes
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToLogin(history)}
          >
            {labelLog}
          </Button>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default MainApp;
