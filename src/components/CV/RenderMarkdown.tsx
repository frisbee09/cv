import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { getPublicAssetLocation } from '../../utils/getPublicAssetLocation';
import Loading from '../Loading';

interface IRenderMarkdownProps {
	file: string;
}

const RenderMarkdownFile: React.FunctionComponent<IRenderMarkdownProps> = ({
	file,
}) => {
	const mdFilePath = file && getPublicAssetLocation(file);
	const [markdownAsString, setMd] = React.useState<string | undefined>(
		undefined
	);
	const [markdownRequestFailed, setFail] = React.useState<string | undefined>(
		undefined
	);

	// Keep content state variables in sync with the content prop we are passed
	React.useEffect(() => {
		const getMd = async (fileLoc: string) => {
			try {
				const mdResponse = await fetch(fileLoc).then(r => r.text());
				setMd(mdResponse);
			} catch (e: any) {
				console.error(e);
				if (typeof e.message === 'string') {
					setFail(e.message);
				}
			}
		};

		if (mdFilePath) {
			getMd(mdFilePath);
		}

		return () => {
			setMd(undefined);
			setFail(undefined);
		};
	}, [mdFilePath]);

	if (mdFilePath) {
		if (markdownAsString !== undefined) {
			return <ReactMarkdown children={markdownAsString} />;
		} else if (markdownRequestFailed) {
			return null;
		} else {
			return <Loading />;
		}
	} else {
		return null;
	}
};

export default RenderMarkdownFile;
