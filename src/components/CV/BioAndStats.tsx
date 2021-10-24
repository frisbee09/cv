import * as React from 'react';
import styled from 'styled-components';
import RenderMarkdownFile from './RenderMarkdown';
import { BioAndStatsWrapper } from './Structure';
const details = require('./details.json');
const skills: { [key: string]: string[] } = details.skills;
const hobbies: { [key: string]: string[] } = details.hobbies;

interface IBioAndStatsProps {}

const SkillsList = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	max-height: 100px;
	min-height: 0;

	align-items: flex-start;

	> div {
		padding: 3px 10px;
		margin: 5px 5px;
		border-radius: 3px;
		&.proficiencies {
			background: ${props =>
				props.theme.foreground.override({ h: 80 }).getHexA()};
		}
		&.experienceWith {
			background: ${props =>
				props.theme.foreground.override({ s: 55 }).getHexA()};
		}
		&.otherLanguages {
		}
	}
`;

const BioAndStats: React.FunctionComponent<IBioAndStatsProps> = props => {
	return (
		<BioAndStatsWrapper>
			<RenderMarkdownFile file="content/bio.md" />
			<h3>Skills</h3>
			<SkillsList>
				{Object.entries(skills).flatMap(([level, skillArray]) =>
					skillArray.map(skill => (
						<div className={level} key={skill}>
							{skill}
						</div>
					))
				)}
			</SkillsList>
			<h3>Hobbies</h3>
			<SkillsList>
				{Object.entries(hobbies).flatMap(([level, skillArray]) =>
					skillArray.map(skill => (
						<div className={level} key={skill}>
							{skill}
						</div>
					))
				)}
			</SkillsList>
		</BioAndStatsWrapper>
	);
};

export default BioAndStats;
