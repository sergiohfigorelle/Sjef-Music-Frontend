import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MusicFeedPage from "../pages/MusicFeedPage";
import AddMusicPage from "../pages/AddMusicPage";
import MusicDetailPage from "../pages/MusicDetailPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path={["/login", "/"]}>
        <LoginPage />
      </Route>
      <Route exact path={"/signup"}>
        <SignUpPage />
      </Route>
      <Route exact path={"/music"}>
        <MusicFeedPage />
      </Route>
      <Route exact path={["/music/registry"]}>
        <AddMusicPage />
      </Route>
      <Route exact path={"/music/:id"}>
        <MusicDetailPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
