export const goToLogin = (history) => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

export const goToMusicFeed = (history) => {
  const token = window.localStorage.getItem("token");
  if (!token) {
    alert("Por favor faça o seu login!");
  } else {
    history.push("/music");
  }
};

export const goToMusicDetail = (history, id) => {
  history.push(`/music/${id}`);
};

export const goToAddMusic = (history) => {
  history.push(`/music/registry`);
};

export const goBack = (history) => {
  history.goBack();
};
