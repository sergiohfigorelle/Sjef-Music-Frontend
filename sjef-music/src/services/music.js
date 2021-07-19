import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { goToMusicFeed } from "../routes/coordinator";

export const addMusic = (body, history) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: token };

  axios
    .post(`${BASE_URL}/music/registry`, body, { headers })
    .then((response) => {
      alert("Música cadastrada!");
      goToMusicFeed(history);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
};

export const deleteMusic = (id, history) => {
  const token = localStorage.getItem("token");
  const headers = { authorization: token };

  if (window.confirm("Tem certeza que deseja excluir essa música?")) {
    axios
      .delete(`${BASE_URL}/music/delete/${id}`, { headers })
      .then((response) => {
        alert("Música excluída!");
        console.log(response);
        goToMusicFeed(history);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }
};
