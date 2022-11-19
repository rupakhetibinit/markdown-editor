import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import ReactCodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import CodeMirrorWrapper from './components/CodeMirror';

const extensions = [markdown()];

function App() {
	const [code, setCode] = useState('Hello World!,');

	return (
		<div className='w-screen h-screen bg-red-500 flex flex-col items-center'>
			<Header />
			<div className='flex'>
				{/* <ReactCodeMirror
					className='50vw'
					editable={true}
					value={code}
					height='500px'
					width='50vw'
					extensions={extensions}
					onChange={onChange}
				/> */}
				<CodeMirrorWrapper code={code} setCode={setCode} />
				<Preview code={code} />
			</div>
		</div>
	);
}

export default App;
