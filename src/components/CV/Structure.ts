import styled from 'styled-components';

export const CVGrid = styled.div`
	margin: auto;
	max-width: 1000px;
	height: 100%;
	> * {
		padding: 15px;
	}

	border-left-style: solid;
	border-right-style: solid;
	border-width: 1px;
	border-color: ${props =>
		props.theme.background.override({ l: 12 }).getHexA()};
	box-shadow: 0px 0px 20px 2px
			${props => props.theme.background.override({ l: 12 }).getHexA()},
		0px 0px 50px -5px ${props => props.theme.background.override({ l: 12 }).getHexA()};

	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: minmax(350px, 30%) minmax(0, 1fr);
`;

/**
 * Wrapper that decides header visual cue
 */
export const HeaderWrapper = styled.div`
	grid-row: 1;
	grid-column: 1 / -1;
	display: grid;

	grid-template-columns: 350px 1fr;
	grid-template-areas: 'bannerPlaceholder content';

	background: ${props => props.theme.foreground.getHexA()};

	position: sticky;
	top: 0;
`;

/**
 * Wrapper that decides positioning of the content (name, tagline etc)
 */
export const HeaderContentWrapper = styled.div`
	grid-area: content;

	min-height: 130px;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	text-transform: uppercase;

	> h1 {
		margin: 10px 0;
		letter-spacing: 10px;
		font-weight: 500;
	}
	> hr {
		width: 100px;
	}
`;

export const BodyWrapper = styled.div`
	grid-row: 2;
	grid-column: 2;
`;

export const ProfilePicture = styled.img`
	grid-area: profile;
	border-radius: 15px;
	border-radius: 50%;

	width: 200px;
	height: 200px;
	object-fit: cover;
	object-position: top;

	filter: contrast(1.02);
`;

export const LeftColumn = styled.div`
	grid-row: 1 / -1;
	grid-column: 1 / 2;
	background: ${props =>
		props.theme.foreground.override({ s: 30, l: 45 }).getHexA()};
	background: transparent;

	display: flex;
	flex-direction: column;
	margin: 25px;
	margin-right: 0;
	margin-bottom: 0;
	border-radius: 10px 10px 0 0;

	> img {
		align-self: center;
	}
`;
