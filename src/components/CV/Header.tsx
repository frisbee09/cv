import * as React from 'react';
import { HeaderContentWrapper, HeaderWrapper } from './Structure';

interface ICVHeaderProps {}

const CVHeader: React.FunctionComponent<ICVHeaderProps> = props => {
	return (
		<HeaderWrapper>
			<HeaderContentWrapper>
				<h1>Chris Johnstone</h1>
				<hr />
				<div>
					<p>Front end web developer</p>
				</div>
			</HeaderContentWrapper>
		</HeaderWrapper>
	);
};

export default CVHeader;
