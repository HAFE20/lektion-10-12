import { useContext } from 'react'
import { UserContext } from './UserContext'

interface UserProfileProps {
	toggleLogin: () => void;
}

const UserProfile = ({ toggleLogin }: UserProfileProps) => {
	const maybeUser = useContext(UserContext)
	return (
		<div>
		{ maybeUser
			? 'Welcome ' + maybeUser.username
			: 'Please login' }
		<button onClick={toggleLogin}> {maybeUser ? 'Log out' : 'Log in'} </button>
		</div>
	)
}

export default UserProfile
