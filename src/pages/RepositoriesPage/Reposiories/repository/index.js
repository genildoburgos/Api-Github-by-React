/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Container, Name, Description, Footer, Lang, Link } from './styles'

function Repository() {
  return (
    <Container color='#f47272'>
        <Name>
            Repository
        </Name>

        <Description>
            Essa é uma descrição
        </Description>
        <Footer color='#f47272'>
            <Lang>
                Repositorie Lang
            </Lang>

            <Link href='https://devsamurai.com.' target='blank'>
                Ver
            </Link>

        </Footer>
    </Container>
  )
}

export default Repository
