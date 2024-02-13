/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Main, Logo, Tittle, Form, Input, Button } from "./styles";
import githubLogo from '../../assets/imgaens/github-logo.svg'

function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Main>
      <Logo src={githubLogo} alt="APi GitHub"/>
      <Tittle>API GIT HUB</Tittle>
      <Form>
        <Input
          placeholder="Usuario"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          />
        <Button to={`/${login}/repositories`}>
          <MdSearch color="#fff" size={42}/>
        </Button>
      </Form>
    </Main>
  );
}

export default MainPage;
