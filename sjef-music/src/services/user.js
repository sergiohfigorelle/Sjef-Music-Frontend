import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { goToMusicFeed } from "../routes/coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      console.log(`${BASE_URL}"/user/login"`);
      localStorage.setItem("token", response.data.result.accessToken);
      localStorage.setItem("username", response.data.result.username);
      goToMusicFeed(history);
    })
    .catch((error) => {
      console.log(error.response);
      alert(error.response.data.error);
    });
};

export const signup = (body, history) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((response) => {
      console.log(body);
      console.log("Resposta do back:", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", body.name);
      goToMusicFeed(history);
    })
    .catch((error) => {
      alert(error);
    });
};
