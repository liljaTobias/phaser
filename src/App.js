import React from 'react'
import ReactDOM from 'react-dom'

import Game from './containers/Game'

const App = () => {
	return (
		<div>
			<Game />
		</div>
	)
}
export default App
ReactDOM.render(<App />, document.getElementById('app'))
