import * as React from 'react';
import {
	HeaderWrapper,
	HeaderContentWrapper,
	ProfilePicture,
} from './Structure';
const details = require('./details.json');

interface ICVHeaderProps {}

const CVHeader: React.FunctionComponent<ICVHeaderProps> = props => {
	return (
		<>
			<HeaderWrapper />
			<ProfilePicture />
			<HeaderContentWrapper>
				<h1>{details.name}</h1>
				<hr />
				<p>{details.tagline}</p>
			</HeaderContentWrapper>
		</>
	);
};

export default CVHeader;
