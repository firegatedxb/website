import React from 'react'
import Header from './Header'
import AddressBar from './AddressBar'
import Form from './Form'
import Socials from './Socials'

import { Contact } from '@/public/types/Common';

const Index = async ({ data }: { data: Contact }) => {
  return (
    <>
      <Header data={data} />
    <AddressBar data={data}/>
    <Form/>
    <Socials data={data}/>
    </>
  )
}

export default Index