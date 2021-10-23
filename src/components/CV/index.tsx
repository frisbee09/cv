import * as React from 'react';
import { CVGrid, LeftColumn, ProfilePicture } from './Structure';
import CVHeader from './Header';
import CVBody from './Body';

interface ICVProps {}

const CV: React.FunctionComponent<ICVProps> = props => {
	return (
		<CVGrid>
			<ProfilePicture />
			<CVHeader />
			<LeftColumn />
			<CVBody />
		</CVGrid>
	);
};

export default CV;
