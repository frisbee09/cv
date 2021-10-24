import * as React from 'react';
import { CVItem, SideProject } from './DetailsTypes';
import RenderMarkdownFile from './RenderMarkdown';
import Education from './Sections/Education';
import SectionItem from './Sections/SectionItem';
import { BodyWrapper } from './Structure';
const details = require('./details.json');
const { experience, sideProjects } = details;

interface ICVBodyProps {}

const CVBody: React.FunctionComponent<ICVBodyProps> = props => {
	return (
		<BodyWrapper>
			<h2>Supporting Statement</h2>
			<SectionItem
				name="Full stack web developer (Python and React)"
				tagline="Nuffield Department of Primary Care Health Sciences"
				contentFile="content/coverLetters/ou-full-stack-oct-2021.md"
			/>
			<div><p>Chris Johnstone</p></div>
		</BodyWrapper>
	);
};

export default CVBody;
