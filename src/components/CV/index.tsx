import * as React from 'react';
import { CVGrid, ProfilePicture } from './Structure';
import CVHeader from './Header';
import BioAndStats from './BioAndStats';
import CVBody from './Body';

interface ICVProps {}

const CV: React.FunctionComponent<ICVProps> = props => {
	return (
		<CVGrid>
			<CVHeader />
			<BioAndStats />
			<CVBody />
		</CVGrid>
	);
};

export default CV;
