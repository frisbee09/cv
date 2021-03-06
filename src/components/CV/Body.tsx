import * as React from 'react';
import { CVItem, SideProject } from './DetailsTypes';
import Education from './Sections/Education';
import SectionItem from './Sections/SectionItem';
import { BodyWrapper } from './Structure';
const details = require('./details.json');
const { experience, sideProjects } = details;

interface ICVBodyProps {}

const CVBody: React.FunctionComponent<ICVBodyProps> = props => {
	return (
		<BodyWrapper>
			<h2>Experience</h2>
			{experience.map((e: CVItem) => (
				<SectionItem {...e} tagline={e.at} key={e.name} />
			))}
			<h2>Side projects</h2>
			{sideProjects.map((e: SideProject) => (
				<SectionItem {...e} tagline={e.repo} key={e.name}>
					{/* <a href={e.url}>{e.repo}</a> */}
				</SectionItem>
			))}
			<Education />
		</BodyWrapper>
	);
};

export default CVBody;
