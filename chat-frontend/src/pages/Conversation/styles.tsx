import styled from "styled-components";
import { colors } from "~/styles/colors";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
`;

export const MessagesContainer = styled.div`
  overflow-y: scroll;

  width: 100%;

  ::-webkit-scrollbar {
    height: auto;
    width: 7px;
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${colors.secondary};
    border-radius: 1ex;
    box-shadow: 0px 1px 2px transparent;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

