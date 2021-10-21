import * as React from 'react';
import Education from './Sections/Education';
import { BodyWrapper } from './Structure';

interface ICVBodyProps {}

const CVBody: React.FunctionComponent<ICVBodyProps> = props => {
	return (
		<BodyWrapper>
			<Education />
		</BodyWrapper>
	);
};

export default CVBody;
