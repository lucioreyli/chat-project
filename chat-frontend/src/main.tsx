import React from 'react'
import ReactDOM from 'react-dom'
import { Conversation } from '~/pages/Conversation/Conversation'
import { Contacts } from '~/pages/Contacts/Contacts'
import { GlobalStyle } from '~/styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Contacts />
    <Conversation />
  </React.StrictMode>,
  document.getElementById('root')
)
