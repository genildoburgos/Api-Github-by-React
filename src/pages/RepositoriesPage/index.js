/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Reposiories';
import { Container, Siderbar, Main } from './styles'

function RepositoriesPage () {
    return (
        <Container>
            <Siderbar>
                <Profile />
                <Filter />
            </Siderbar>
            <Main>
                <Repositories />
            </Main>
        </Container>
    )
}

export default RepositoriesPage;
