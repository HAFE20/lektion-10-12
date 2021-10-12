import { useState } from 'react';
import UserProfile from './header/UserProfile'
import { User } from './models/User'
import './App.css';
import { UserContext } from './header/UserContext'
import ProductView from './main/ProductView'

function App() {
	const [maybeUser, setMaybeUser] = useState<null | User>(null)

	// toggleLogin: () => void
	const toggleLogin = () => {
		if( maybeUser )
			setMaybeUser(null)
		else
			setMaybeUser({ username: 'Sigge_Stardust' })
	}

	return (
		<UserContext.Provider value={maybeUser}>
		<div className="App">
		<header>
			<UserProfile toggleLogin={toggleLogin} />
		</header>
		</div>
		<main>
			<ProductView />
		</main>
		</UserContext.Provider>
	);
}

export default App;
