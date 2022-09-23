import { createEffect, createSignal } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'

let templateRenders = 1
let scriptRuns = 0

const App = () => {
	const [count, setCount] = createSignal(0)
	const [comparativeCount, setComparativeCount] = createSignal(count())
	const [count2, setCount2] = createSignal(0)
	createEffect(() => {
		if (count() !== comparativeCount()) {
			setComparativeCount(count())
			setCount2(count2() + 1)
		}
	})
	console.log(count())
	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt='logo' />
				<button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
				<p>Count2: {count()}</p>
				<p>External + count: {templateRenders++ + count()}</p>
				<p>Total of script re-runs is: {scriptRuns++}</p>
				<p>Total of template renders is: {templateRenders}</p>
			</header>
		</div>
	)
}

export default App
