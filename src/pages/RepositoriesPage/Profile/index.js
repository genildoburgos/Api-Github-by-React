/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import {MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md"
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

function Profile() {
  return (
    <Container>
      <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/136193531?v=4"/>
        <Login>Meu Login</Login>
        <Name>Genildo</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup sixe={20}/>
          30 seguidores
          10 seguindo
        </Data>
        <Data>
          <MdWork sixe={20}/>
          Google
        </Data>
        <Data>
          <MdLocationCity sixe={20}/>
          Pesqueira-pe
        </Data>
        <Data>
          <MdLink sixe={20}/>
          <a href="https://api.github.com/users/genildoburgos">meusite.com</a>
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile
