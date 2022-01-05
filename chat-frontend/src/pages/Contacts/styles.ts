import styled from "styled-components";
import { colors } from "~/styles/colors";

export const Container = styled.div`
  border-right: 1px solid ${colors.divisor};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    height: auto;
    width: 7px;
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${colors.secondary};
    border-radius: 1ex;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`