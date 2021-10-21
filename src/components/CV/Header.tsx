import * as React from 'react';
import { HeaderContentWrapper, HeaderWrapper } from './Structure';
const details = require('../../content/details.json');

interface ICVHeaderProps {}

const CVHeader: React.FunctionComponent<ICVHeaderProps> = props => {
	return (
		<HeaderWrapper>
			<HeaderContentWrapper>
				<h1>{details.name}</h1>
				<hr />
				<div>
					<p>{details.tagline}</p>
				</div>
			</HeaderContentWrapper>
		</HeaderWrapper>
	);
};

export default CVHeader;
