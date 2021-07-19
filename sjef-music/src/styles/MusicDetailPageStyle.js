import styled from "styled-components";
import { Button, Card } from "@material-ui/core";

export const MusicDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  max-width: 375px;
  margin: 0 auto;
`;

export const Logomarca = styled.img`
  max-height: 18vh;
  margin-bottom: 16px;  
  object-fit: contain;
`;

export const CardStyled = styled(Card)`
  padding: 16px;
  margin: 32px 0;
`;

export const ButtonStyled = styled(Button)`
  width: 200px;
  align-self: center;
`;
