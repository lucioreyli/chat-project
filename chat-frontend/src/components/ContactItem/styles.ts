import styled from "styled-components"
import { colors } from "~/styles/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  
  border-bottom: 1px solid ${colors.divisor};
  margin-right: 50px;

  padding-block: 5px;

  width: 100%;
  height: 65px;

  transition: 0.1s;

  cursor: pointer;

  :hover {
    background-color: ${colors.divisor};
  }

`
export const Icon = styled.img`
  height: 50px;
  border-radius: 50px;
  margin-inline: 20px;

  -webkit-user-drag: none;

`
export const Username = styled.h2`
  color: ${colors.heading};
  font-size: 14px;
  font-weight: 600;
`