import * as React from 'react';
import { BodyWrapper } from './Structure';

interface ICVBodyProps {}

const CVBody: React.FunctionComponent<ICVBodyProps> = props => {
	return (
		<BodyWrapper>
			<p>Hi</p>
		</BodyWrapper>
	);
};

export default CVBody;
