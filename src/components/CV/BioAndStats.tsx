import * as React from 'react';
import styled from 'styled-components';
import mediaQuery from '../mediaQuery';
import RenderMarkdownFile from './RenderMarkdown';
import { BioAndStatsWrapper } from './Structure';
const details = require('./details.json');
const skills: { [key: string]: string[] } = details.skills;
const hobbies: { [key: string]: string[] } = details.hobbies;

interface IBioAndStatsProps {}

const SkillsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	min-height: 0;

	align-items: flex-start;

	> div {
		padding: 5px 10px;
		margin-bottom: 5px;
		margin-right: 5px;
		border-radius: 3px;

		border: 1px solid
			${props => props.theme.foreground.override({ s: 15, l: 25 }).getHexA()};

		// Default background for items rendered here
		background: ${props =>
			props.theme.confirm
				.override({
					s: 15,
					l: 10,
					a: 0.6,
				})
				.getHexA()};
		&.proficiencies {
			background: ${props =>
				props.theme.confirm
					.override({
						s: props.theme.confirm.s + 10,
						l: props.theme.confirm.l - 10,
						a: 0.75,
					})
					.getHexA()};
		}
		&.experienceWith {
			background: ${props =>
				props.theme.confirm
					.override({
						s: props.theme.confirm.s - 10,
						l: props.theme.confirm.l + 10,
						a: 0.6,
					})
					.getHexA()};
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
