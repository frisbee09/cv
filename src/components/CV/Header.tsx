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
				<h1 className="name">{details.name}</h1>
				<hr />
				<h3 className="tag">{details.tagline}</h3>
			</HeaderContentWrapper>
		</>
	);
};

export default CVHeader;
