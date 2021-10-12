import React from 'react';
import User from './header/User'
import './App.css';
import { UserContext } from './header/UserContext'

function App() {
	return (
		<UserContext.Provider value={null}>
		<div className="App">
		<header>
			<User />
		</header>
		</div>
		</UserContext.Provider>
	);
}

export default App;
