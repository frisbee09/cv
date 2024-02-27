import styled, { css } from 'styled-components';
import mediaQuery from '../mediaQuery';
import headshot from './Headshot.jpg';

const PROFILE_PICTURE_SIZE = 200;
export const GRID_BANNER_HEIGHT = 110;
const TOP_LEVEL_CV_PADDING = 15;
const COLUMN_MIN_IN_PX = 300;

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
	grid-template-columns: minmax(${COLUMN_MIN_IN_PX}px, 30%) minmax(0, 1fr);
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

	> .name {
		margin: 0;
		letter-spacing: 5px;
		font-weight: 500;
		${mediaQuery.lessThan('tablet')`
			letter-spacing: 5px;
		`}
	}
	> .tag {
		margin-top: 4px;
		font-weight: 500;
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

export const BodySection = styled.section`
	/* Page break for print */
	@media print {
		@page {
			size: A4;
		}
		&.pagebreak {
			// Start a new page if we see the classname
			page-break-before: always;

			// Move it over the sidebar on the left. Sticky doesn't work in print.
			position: relative;
			z-index: 1;
			left: -${COLUMN_MIN_IN_PX}px;

			// Make sure it fills the page
			width: 100vw;
			height: 100vh;

			// Add padding to be in line with the spacing of the rest of the CV
			padding: ${TOP_LEVEL_CV_PADDING}px;
		}
	}

	/* Prevent the margin collapse so we get a nice background alternation*/
	padding-top: 1px;
	padding-bottom: ${TOP_LEVEL_CV_PADDING}px;

	&:nth-child(2n) {
		// Alternate the backgrounds each section for fun
		background: ${props =>
			props.theme.background
				.override({
					l: props.theme.background.l - 3,
					s: props.theme.background.s + 4,
				})
				.getHexA()};
	}
	&:nth-child(n + 1) {
		// This is to allow the sections to fill their backgrounds to alternate
		// colours. The first one needs proper margins for the header/sidebar
		margin-left: -${TOP_LEVEL_CV_PADDING}px;
		margin-right: -${TOP_LEVEL_CV_PADDING}px;

		padding-left: ${TOP_LEVEL_CV_PADDING}px;
		padding-right: ${TOP_LEVEL_CV_PADDING}px;
	}
`;

export const BioAndStatsWrapper = styled.div`
	grid-row: 2 / -1;
	grid-column: 1 / 2;

	position: sticky;
	top: ${GRID_BANNER_HEIGHT}px;
	height: calc(100vh - ${GRID_BANNER_HEIGHT}px);
	/* Fix for <hr> going over the sticky div */
	z-index: 1;

	/* Padding top to get out from under my cheeky grin */
	padding-top: ${PROFILE_PICTURE_SIZE / 2}px;

	${mediaQuery.lessThan('tablet')`
		height: unset;
		position: unset;
		z-index: unset;
		
		grid-row: 2 / 3;
		padding-bottom: ${TOP_LEVEL_CV_PADDING}px;
		padding-top: 0px;
	`}
	background: ${props =>
		props.theme.background
			.override({ l: props.theme.background.l - 5 })
			.getHexA()};
`;
