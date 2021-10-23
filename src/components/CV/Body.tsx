import * as React from 'react';
import { CVItem } from './DetailsTypes';
import Education from './Sections/Education';
import SectionItem from './Sections/SectionItem';
import { BodyWrapper } from './Structure';
const details = require('./details.json');

interface ICVBodyProps {}

const CVBody: React.FunctionComponent<ICVBodyProps> = props => {
	return (
		<BodyWrapper>
			<h2>Experience</h2>
			{details.experience.map((e: CVItem) => (
				<SectionItem {...e} key={e.name} />
			))}
			<Education />
		</BodyWrapper>
	);
};

export default CVBody;
