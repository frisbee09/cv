import styled, { css } from 'styled-components';
import headshot from './Headshot.jpg';

const PROFILE_PICTURE_SIZE = 200;
const GRID_BANNER_HEIGHT = 110;
const TOP_LEVEL_CV_PADDING = 15;

const PROFILE_PICTURE_TOP_PADDING =
	GRID_BANNER_HEIGHT - PROFILE_PICTURE_SIZE / 2;

export const ProfilePicture = styled.img.attrs(() => {
	return { src: headshot };
})`
	grid-area: profile;
	border-radius: 15px;
	border-radius: 50%;

	width: ${PROFILE_PICTURE_SIZE}px;
	height: ${PROFILE_PICTURE_SIZE}px;
	object-fit: cover;
	object-position: top;

	filter: contrast(1.02);

	position: sticky;
	top: ${PROFILE_PICTURE_TOP_PADDING}px;
	z-index: 2;
`;

const GRID_COLUMN_DEFINITION = css`
	grid-template-columns: minmax(300px, 30%) minmax(0, 1fr);
`;

export const CVGrid = styled.div`
	margin: auto;
	max-width: 1000px;
	height: 100%;
	> * {
		padding: ${TOP_LEVEL_CV_PADDING}px;
	}

	background: ${props => props.theme.background.getHexA()};
	border-left-style: solid;
	border-right-style: solid;
	border-width: 1px;
	border-color: ${props =>
		props.theme.background.override({ l: 12 }).getHexA()};
	box-shadow: 0px 0px 20px 2px
			${props => props.theme.background.override({ l: 12 }).getHexA()},
		0px 0px 50px -5px ${props => props.theme.background.override({ l: 12 }).getHexA()};

	display: grid;
	grid-template-rows: ${GRID_BANNER_HEIGHT}px 1fr;
	${GRID_COLUMN_DEFINITION};

	&,
	* {
		-webkit-print-color-adjust: exact;
	}

	${ProfilePicture} {
		padding: 0;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		justify-self: center;
	}
`;

/**
 * Wrapper that decides header visual cue
 */
export const HeaderWrapper = styled.div`
	grid-row: 1;
	grid-column: 1 / -1;
	display: grid;
	min-height: 0;

	align-items: start;

	${GRID_COLUMN_DEFINITION};
	grid-template-areas: 'bannerPlaceholder content';

	background: ${props => props.theme.foreground.getHexA()};

	position: sticky;
	top: 0;
	/* Fix for <hr> going over the sticky div */
	z-index: 1;
`;

/**
 * Wrapper that decides positioning of the content (name, tagline etc)
 */
export const HeaderContentWrapper = styled.div`
	grid-area: content;

	display: flex;
	flex-direction: column;

	align-items: flex-start;
	justify-content: center;

	text-transform: uppercase;

	> h1 {
		margin: 0;
		letter-spacing: 10px;
		font-weight: 500;
	}
	> hr {
		width: 100px;
		margin-left: 0;
	}
`;

export const BodyWrapper = styled.div`
	grid-row: 2;
	grid-column: 2;
`;

export const LeftColumn = styled.div`
	grid-row: 1 / -1;
	grid-column: 1 / 2;
	background: ${props =>
		props.theme.background
			.override({ l: props.theme.background.l - 5 })
			.getHexA()};
`;
