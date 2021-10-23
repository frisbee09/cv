import { generateMedia } from 'styled-media-query';
const mediaSizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

const mediaQuery = generateMedia(mediaSizes);
export default mediaQuery;
