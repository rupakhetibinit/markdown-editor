import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { useCodeMirror, ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { languages } from '@codemirror/language-data';
import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useMemo,
	useRef,
} from 'react';

type Props = {
	code: string;
	setCode: any;
};
const extensions = [
	markdown({ base: markdownLanguage, codeLanguages: languages }),
];

function CodeMirrorWrapper({ code, setCode }: Props) {
	const editor = useRef(null);
	const { setContainer } = useCodeMirror({
		container: editor.current,
		extensions,
		value: code,
		onChange: (value) => setCode(value),
		basicSetup: {
			bracketMatching: true,
			foldGutter: false,
			highlightActiveLineGutter: false,
			highlightActiveLine: false,
			lineNumbers: false,
			syntaxHighlighting: true,
		},
	});

	useEffect(() => {
		if (editor.current) {
			setContainer(editor.current);
		}
	}, [editor.current]);

	return <div className='w-[50vw] m-1' ref={editor} />;
}

export default CodeMirrorWrapper;
