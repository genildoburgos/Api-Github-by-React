import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:  center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Navitens = styled.div`
  display: flex;
  gap: 20px;
`;

export const Logonav = styled.img`
  width: 30px;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Tittlenav = styled.h1`
  font-size: 1.7rem;
  color: ${(props)=> props.theme.colors.text};
`;

export const Tittle = styled.h1`
  font-size: 2.2rem;
  color: ${(props)=> props.theme.colors.text};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content:center

`

export const Input = styled.input`
  background: rgba(0,0,0, o.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder {
    color: ${(props)=> props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props)=> props.theme.colors.text};
  transition: background 0.3s;

  &:hover {
	background: ${(props)=>	props.theme.colors.container};
}
`;
