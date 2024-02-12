/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Container, Selector, Cleaner } from './styles';

function Filter() {
    const langs = [
        {name: 'JavaScript', count:5, color: '#f1c40f' },
        {name: 'Shell', count:0, color: '#95a5a6' },
        {name: 'Python', count:3, color: '#3498db' },
    ];

    const selectors = langs.map((lang) =>(
        <Selector key={lang.name.toLowerCase()} color={lang.color}>
            <span> {lang.name} </span>
            <span> {lang.count} </span>
        </Selector>
    ))

    return (

    <Container>
        {selectors}
        <Cleaner>
            Limpar
        </Cleaner>
    </Container>

  )
}

export default Filter;
