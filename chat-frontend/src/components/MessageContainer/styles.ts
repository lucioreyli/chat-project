import styled from "styled-components"
import { colors } from "~/styles/colors"

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.background};
  border-block: 1px solid ${colors.divisor};
  padding-block: 15px;
  display: flex;
  flex-direction: row;
`

export const Icon = styled.img`
  height: 50px;
  border-radius: 50px;
  margin-left: 15px;
`

export const Content = styled.div`
  padding-left: 15px;
`

export const Message = styled.p`
  font-weight: 400;
  font-size: 14px;
`

export const Username = styled.h2`
color: ${colors.heading};
font-size: 14px;
font-weight: 600;
margin-bottom: 5px;
`
