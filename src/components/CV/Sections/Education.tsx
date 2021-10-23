import * as React from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { getPublicAssetLocation } from '../../../utils/getPublicAssetLocation';
import Loading from '../../Loading';
import RenderMarkdownFile from '../RenderMarkdown';
const details = require('../details.json');

interface IEducationItemProps {
	name: string;
	at: string;
	start: number;
	end: number;
	content?: string;
	results?: { [item: string]: string };
}

const EDUCATION_ITEM_ACCENT = css`
	${props => props.theme.accent.override({ s: 50 }).getHexA()}
`;
const EducationItemWrapper = styled.div`
	.header {
		display: flex;
		justify-content: space-between;

		margin-top: 10px;
		margin-bottom: -3px;
		color: ${EDUCATION_ITEM_ACCENT};
		> .name {
			text-transform: uppercase;
		}
		~ .location {
			margin-top: 0px;
			margin-bottom: 5px;
			font-size: 0.85rem;
			font-style: italic;
			color: ${EDUCATION_ITEM_ACCENT};
		}
	}

	.result {
		::after {
			content: ' / ';
		}
		&:last-child {
			::after {
				content: '';
			}
		}
	}

	hr {
		border-color: ${props => props.theme.text.getHexA()};
		opacity: 0.5;
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
				{content && <RenderMarkdownFile file={content} />}
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
