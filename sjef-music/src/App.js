import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStateContext from "./globalContext/GlobalStateContext";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import MainApp from "./components/MainApp";
import Router from "./routes/Router";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 32px;
`;

const App = () => {
  const [labelLog, setLabelLog] = useState("Login");
  const data = { labelLog, setLabelLog };

  return (
    <GlobalStateContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainApp />
          <Container>
            <Router />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
};

export default App;
