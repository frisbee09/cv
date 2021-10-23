import * as React from 'react';
import styled, { css } from 'styled-components';
import RenderMarkdownFile from '../RenderMarkdown';

const SECTION_ITEM_ACCENT = css`
	${props => props.theme.accent.override({ s: 50 }).getHexA()}
`;
const StyledItemWrapper = styled.div`
	.header {
		/* Flex the header to set the name and time worked there apart */
		display: flex;
		justify-content: space-between;
		margin-top: 10px;

		/* A negative bottom margin nests the tagline underneath */
		margin-bottom: -3px;
		&,
		~ .location {
			color: ${SECTION_ITEM_ACCENT};
		}
		> .name,
		> .time {
			text-transform: uppercase;
		}

		/* The tagline CSS */
		~ .location {
			margin-top: 0px;
			margin-bottom: 5px;

			/* Small and italic with the same coloring */
			font-size: 0.85rem;
			font-style: italic;
		}
	}

	.content {
	}

	hr {
		border-color: ${props => props.theme.text.getHexA()};
		opacity: 0.5;
	}
`;

interface ISectionItemProps {
	className?: string;
	name: React.ReactNode;
	start: React.ReactNode;
	end: React.ReactNode;
	at: React.ReactNode;
	contentFile?: string;
}

/**
 * Generic section item structure
 *
 * Forcing as many CV items through this component as possible will promote
 * maintainability.
 *
 * The other section components can map from the details model to the section
 * items. This way the modelling layer remains declarative and we just need to
 * maintain the mapping between model and presentation
 * @param props
 * @returns
 */
const SectionItem: React.FC<ISectionItemProps> = ({
	className,
	name,
	start,
	end,
	at,
	contentFile,
	children,
}) => {
	return (
		<StyledItemWrapper className={className}>
			<h3 className="header">
				<span className="name">{name}</span>
				<span className="time">
					{start} - {end}
				</span>
			</h3>
			<p className="location">{at}</p>
			<div className="content">
				{children}
				{contentFile && <RenderMarkdownFile file={contentFile} />}
			</div>
			<hr />
		</StyledItemWrapper>
	);
};

export default SectionItem;
