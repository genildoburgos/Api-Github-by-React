/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Reposiories';
import { Container, Siderbar, Main } from './styles'
import { getLangsFrom } from '../../services/api';

function RepositoriesPage () {

    const [ currentLanguage, setCurrentLanguage] = useState();

    const user = {
        login: "genildoburgos",
        name: "genildo",
        avatar_url: "https://avatars.githubusercontent.com/u/136193531?v=4",
        followers: 2,
        following: 12,
        company: '',
        blog: '',
        location: "Pernambuco, Brasil",
    };

    const repositories = [
        {
            id: "1",
            name: 'Repo 1',
            description: 'Descrição',
            html_url: 'https://avatars.githubusercontent.com/u/136193531?v=4',
            language: 'JavaScript'
        },
        {
            id: "2",
            name: 'Repo 2',
            description: 'Descrição',
            html_url: 'https://avatars.githubusercontent.com/u/136193531?v=4',
            language: 'JavaScript'
        },
        {
            id: "3",
            name: 'Repo 3',
            description: 'Descrição',
            html_url: 'https://avatars.githubusercontent.com/u/136193531?v=4',
            language: 'C'
        },
        {
            id: "4",
            name: 'Repo 4',
            description: 'Descrição',
            html_url: 'https://avatars.githubusercontent.com/u/136193531?v=4',
            language: 'Java'
        },
        {
            id: "5",
            name: 'Repo 5',
            description: 'Descrição',
            html_url: 'https://avatars.githubusercontent.com/u/136193531?v=4',
            language: 'python'
        },
        {
            id: "6",
            name: 'Repo 6',
            description: 'Descrição',
            html_url: 'https://avatars.githubusercontent.com/u/136193531?v=4',
            language: 'Ruby'
        },
    ];

    const languages = getLangsFrom(repositories);

    const onFilterCLick = (language) =>{
        setCurrentLanguage(language);
    };

    return (
        <Container>
            <Siderbar>
                <Profile user={user} />
                <Filter
                    languages={languages}
                    currentLanguage={currentLanguage}
                    onClick={onFilterCLick}/>
            </Siderbar>
            <Main>
                <Repositories
                    currentLanguage={currentLanguage}
                    repositories={repositories} />
            </Main>
        </Container>
    )
}

export default RepositoriesPage;
