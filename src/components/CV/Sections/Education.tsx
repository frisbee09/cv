import * as React from 'react';
import styled from 'styled-components';
import SectionItem from './SectionItem';
const details = require('../details.json');

interface IEducationItemProps {
	name: string;
	at: string;
	start: number;
	end: number;
	contentFile?: string;
	results?: { [item: string]: string };
}

const EducationResults = styled.div`
	/* Join the results together with separators */
	> *:not(:last-child) {
		::after {
			content: ' / ';
		}
	}
`;

const EducationItem: React.FunctionComponent<IEducationItemProps> = ({
	contentFile,
	results,
	at,
	...rest
}) => {
	return (
		<SectionItem {...rest} tagline={at} contentFile={contentFile}>
			<EducationResults>
				{results &&
					Object.entries(results).map(r => (
						<span key={r[0]}>
							{r[0]} ({r[1]})
						</span>
					))}
			</EducationResults>
		</SectionItem>
	);
};

interface IEducationProps {}

const Education: React.FunctionComponent<IEducationProps> = props => {
	return (
		<>
			<h2>Education</h2>
			{details.education.map((e: IEducationItemProps) => (
				<EducationItem key={e.name} {...e} />
			))}
		</>
	);
};

export default Education;
