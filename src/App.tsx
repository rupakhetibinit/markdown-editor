import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import CodeMirrorWrapper from './components/CodeMirror';

function App() {
	const [code, setCode] = useState('Hello World!,');

	return (
		<div className='w-screen h-screen bg-white flex flex-col items-center'>
			<Header />
			<div className='flex'>
				<CodeMirrorWrapper code={code} setCode={setCode} />
				<Preview code={code} />
			</div>
		</div>
	);
}

export default App;
