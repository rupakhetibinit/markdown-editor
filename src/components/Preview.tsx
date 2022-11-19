import { useCodeMirror } from '@uiw/react-codemirror';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
	code: string;
};

function Preview({ code }: Props) {
	return (
		<div className='prose w-[50vw]'>
			<ReactMarkdown className='prose' children={code} />
		</div>
	);
}

export default Preview;
