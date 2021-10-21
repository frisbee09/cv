import * as React from 'react';
import styled from 'styled-components';
const details = require('../../../content/details.json');

interface IEducationItemProps {
	name: string;
	at: string;
	start: number;
	end: number;
	content?: string;
	results?: { [item: string]: string };
}

const EducationItemWrapper = styled.div`
	.header {
		display: flex;
		justify-content: space-between;

		margin-top: 15px;
		margin-bottom: 0px;
		color: ${props => props.theme.accent.override({ s: 50 }).getHexA()};
		> .name {
			text-transform: uppercase;
		}
		~ .location {
			margin-top: 0px;
			margin-bottom: 10px;
			font-size: 0.8rem;
			color: ${props => props.theme.accent.override({ s: 50 }).getHexA()};
		}
	}

	.result {
		font-style: italic;
		::after {
			content: ' / ';
		}
		&:last-child {
			::after {
				content: '';
			}
		}
	}
`;

const EducationItem: React.FunctionComponent<IEducationItemProps> = ({
	name,
	at,
	start,
	end,
	content,
	results,
}) => {
	return (
		<EducationItemWrapper>
			<h3 className="header">
				<span className="name">{name}</span>
				<span className="time">
					{start} - {end}
				</span>
			</h3>
			<p className="location">{at}</p>
			<div className="content">
				{results &&
					Object.entries(results).map(r => (
						<span className="result">
							{r[0]} ({r[1]})
						</span>
					))}
			</div>
			<hr />
		</EducationItemWrapper>
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
