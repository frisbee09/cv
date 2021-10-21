import * as React from 'react';
import { CVGrid, LeftColumn, ProfilePicture } from './Structure';
import CJHeadshot from './Headshot.jpg';
import CVHeader from './Header';
import CVBody from './Body';

interface ICVProps {}

const CV: React.FunctionComponent<ICVProps> = props => {
	return (
		<CVGrid>
			<CVHeader />
			<LeftColumn>
				<ProfilePicture src={CJHeadshot} />
			</LeftColumn>
			<CVBody />
		</CVGrid>
	);
};

export default CV;
