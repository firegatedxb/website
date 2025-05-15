import React from 'react'
import Header from './Header'
import AddressBar from './AddressBar'
import Form from './Form'
import Socials from './Socials'
import {address} from './data'

const Index = () => {
  return (
    <>
    <Header/>
    <AddressBar data={address.data}/>
    <Form/>
    <Socials/>
    </>
  )
}

export default Index