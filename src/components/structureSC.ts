import styled from 'styled-components';

export const CVGrid = styled.div`
	margin: auto;
	display: grid;
	max-width: 1000px;
	height: 100%;
	background: ${props => props.theme.primary.getHexA()};
`;
