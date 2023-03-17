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
		~ .tagline {
			color: ${SECTION_ITEM_ACCENT};
			a {
				color: ${SECTION_ITEM_ACCENT};
			}
		}
		> .name,
		> .time {
			text-transform: uppercase;
		}

		/* The tagline CSS */
		~ .tagline {
			margin-top: 0px;
			margin-bottom: 5px;

			/* Small and italic with the same colouring */
			font-size: 0.85rem;
			font-style: italic;
		}
	}

	.content {
		/* Standard margin */
		h1,
		h2,
		h3,
		h4,
		ul,
		ol {
			margin: 10px 0;
		}

		/* Reset user agent on p tags */
		p {
			margin: 0;
			margin-top: 10px;
		}

		ol,
		ul {
			margin-left: 0;
			padding-left: 15px;

			/* List item siblings and nested lists also need a reduced margin  */
			li,
			li > ul,
			li > ol {
				margin: 3px 0;
			}
		}

		/* p tags that go into lists, nest them slightly as looks visually related */
		p ~ ol,
		p ~ ul {
			margin-top: 3px;
		}

		/* Giving visual acuity to code monospace */
		code {
			width: 100%;
			filter: contrast(40%);
		}
	}

	hr {
		border-color: ${props => props.theme.text.getHexA()};
		/* Fill these in just for slight rendering issues that can cause them to
		look larger than 2px */
		background: ${props => props.theme.text.getHexA()};
		opacity: 0.5;
		margin: 10px 0;
		height: 0px;
	}

	/* The last hr on the last item in the section */
	&:last-child > hr:last-child {
		/* We have alternating background to distinguish sections, the final
		<hr/> is no longer needed */
		display: none;
	}
`;

interface ISectionItemProps {
	className?: string;
	name: React.ReactNode;
	start?: React.ReactNode;
	end?: React.ReactNode;
	tagline?: React.ReactNode;
	url?: string;
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
const SectionItem: React.FC<React.PropsWithChildren<ISectionItemProps>> = ({
	className,
	name,
	start,
	end,
	tagline,
	url,
	contentFile,
	children,
}) => {
	return (
		<StyledItemWrapper className={className}>
			<h3 className="header">
				<span className="name">{name}</span>
				{(start || end) && (
					<span className="time">
						{start}
						{end && ` - ${end}`}
					</span>
				)}
			</h3>
			<p className="tagline">
				{tagline}
				{url ? (
					<>
						<span> @ </span>
						<a href={url}>{url}</a>
					</>
				) : undefined}
			</p>
			<div className="content">
				{children}
				{contentFile && <RenderMarkdownFile file={contentFile} />}
			</div>
			<hr />
		</StyledItemWrapper>
	);
};

export default SectionItem;
