import styled from "styled-components";
import { Button } from "@material-ui/core";

export const MusicFeedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  max-width: 375px;
  margin: 0 auto;
`;

export const Logomarca = styled.img`
  max-height: 18vh;
  margin-bottom: 48px;
  object-fit: contain;
`;

export const ButtonStyled = styled(Button)`
  width: 200px;
  align-self: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;
