import styled, { css } from 'styled-components';
import mediaQuery from '../mediaQuery';
import headshot from './Headshot.jpg';

const PROFILE_PICTURE_SIZE = 200;
export const GRID_BANNER_HEIGHT = 110;
const TOP_LEVEL_CV_PADDING = 15;

const PROFILE_PICTURE_TOP_PADDING =
	GRID_BANNER_HEIGHT - PROFILE_PICTURE_SIZE / 2;

const SMALL_IMAGE_SIZE = GRID_BANNER_HEIGHT - 2 * PROFILE_PICTURE_TOP_PADDING;

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

	grid-row: 1 / 2;
	grid-column: 1 / 2;
	justify-self: center;
	${mediaQuery.lessThan('tablet')`
		margin: ${PROFILE_PICTURE_TOP_PADDING}px;
		height: ${SMALL_IMAGE_SIZE}px;
		width: ${SMALL_IMAGE_SIZE}px;
		justify-self: start;
	`}
`;

const GRID_COLUMN_DEFINITION = css`
	grid-template-columns: minmax(300px, 30%) minmax(0, 1fr);
`;

export const CVGrid = styled.div`
	margin: auto;
	max-width: 1000px;
	min-height: 100%;
	> *:not(img) {
		padding-left: ${TOP_LEVEL_CV_PADDING}px;
		padding-right: ${TOP_LEVEL_CV_PADDING}px;
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

	${mediaQuery.lessThan('tablet')`
		grid-template-columns: 100%;
		grid-template-rows: ${GRID_BANNER_HEIGHT}px minmax(0, auto) auto;

		// Bring everything in to the same column
		&& > * { 
			grid-column: 1 / -1;
		}
	`}
`;

/**
 * Wrapper that decides header visual cue
 */
export const HeaderWrapper = styled.div`
	grid-row: 1;
	grid-column: 1 / -1;
	background: ${props => props.theme.foreground.getHexA()};

	position: sticky;
	top: 0;
	/* Fix for <hr> going over the sticky div */
	z-index: 1;

	${mediaQuery.lessThan('tablet')`
		grid-template-columns: 1fr;
	`}
`;

/**
 * Wrapper that decides positioning of the content (name, tagline etc)
 */
export const HeaderContentWrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 2 / 3;

	display: flex;
	flex-direction: column;

	align-items: flex-start;
	justify-content: center;

	text-transform: uppercase;

	> h1 {
		margin: 0;
		letter-spacing: 10px;
		font-weight: 500;
		${mediaQuery.lessThan('tablet')`
			letter-spacing: 5px;
		`}
	}
	> p {
		margin-top: 4px;
	}
	> hr {
		width: 95%;
		margin: 0;
	}

	height: ${GRID_BANNER_HEIGHT}px;
	position: sticky;
	top: 0;
	/* Fix for <hr> going over the sticky div */
	z-index: 1;

	${mediaQuery.lessThan('tablet')`
		& {
			width: calc(100% - ${SMALL_IMAGE_SIZE + 2 * PROFILE_PICTURE_TOP_PADDING}px);
		}
		&& {
			padding: 0;
			margin-left: ${SMALL_IMAGE_SIZE + 2 * PROFILE_PICTURE_TOP_PADDING}px;
		}
	`}
`;

export const BodyWrapper = styled.div`
	grid-row: 2;
	grid-column: 2;
	${mediaQuery.lessThan('tablet')`
		grid-row: 3;
	`}
`;

export const BioAndStatsWrapper = styled.div`
	grid-row: 2 / -1;
	grid-column: 1 / 2;
	${mediaQuery.greaterThan('tablet')`
		&& {
			/* Padding top to get out from under my cheeky grin */
			padding-top: ${PROFILE_PICTURE_SIZE / 2}px;
		}
	`}
	${mediaQuery.lessThan('tablet')`
		grid-row: 2 / 3;
		padding-bottom: ${TOP_LEVEL_CV_PADDING}px;
	`}
	background: ${props =>
		props.theme.background
			.override({ l: props.theme.background.l - 5 })
			.getHexA()};
`;
