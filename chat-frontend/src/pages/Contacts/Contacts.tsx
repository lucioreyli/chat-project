import { useState } from "react"
import { ContactItem } from "~/components/ContactItem"
import { Container } from "./styles"


export const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      'username': 'lucioroadtoglory',
      'photoURL': '',
    },
    {
      'username': 'bielzote',
      'photoURL': '',
    },
    {
      'username': 'apoliro',
      'photoURL': '',
    },
    {
      'username': 'alvaretz',
      'photoURL': '',
    },
    {
      'username': 'gabs',
      'photoURL': '',
    },
    {
      'username': 'rubenzada',
      'photoURL': '',
    },
    {
      'username': 'gabretalol',
      'photoURL': '',
    },
  ])

  return <Container>
    {
      contacts.map(contact => <ContactItem user={contact} key={contact.username} />)
    }
  </Container>
}