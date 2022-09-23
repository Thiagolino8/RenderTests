import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

let templateRenders = 1
let scriptRuns = 0

function App() {
	const [count, setCount] = useState(0)
	const [comparativeCount, setComparativeCount] = useState(count)
	const [count2, setCount2] = useState(0)
	if (comparativeCount !== count) {
		setComparativeCount(count)
		setCount2((old) => (old + 1))
	}
	console.log(count)
	scriptRuns++
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<button type='button' onClick={() => setCount((oldCount) => oldCount + 1)}>
					count is: {count}
				</button>
				<p>count2 is: {count2}</p>
				<p>External + count: {templateRenders++ + count}</p>
				<p>Total of script re-runs is: {scriptRuns}</p>
				<p>Total of template renders is: {templateRenders}</p>
			</header>
		</div>
	)
}

export default App
