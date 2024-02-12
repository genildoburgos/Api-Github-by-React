
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;

    @media screen and (max-width: ${(props)=> props.theme.breakPoints.md}){
        flex-direction: column;
    }
`;

export const Siderbar = styled.aside`
	background: ${(props)=> props.theme.colors.background};
    color: ${(props)=> props.theme.colors.text};
    min-width: 20rem;
	max-height: 100vh;
	overflow-y: hidden;
`;

export const Main = styled.section`
	background: ${(props)=> props.theme.colors.container};
    color: ${(props)=> props.theme.colors.text};
    width: 100%;
	height: 100vh;
	padding: 40px;
	overflow-y: hidden;

	@media screen and (max-width: ${(props) => props.theme.breakPoints.md}){
		height: 100%;
	}
	@media screen and (max-width: ${(props) => props.theme.breakPoints.sm}){
		padding:40px 20px;
	}
`;
