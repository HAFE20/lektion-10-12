import { useContext } from 'react'
import { UserContext } from '../header/UserContext'

const ProductView = () => {
	const maybeUser = useContext(UserContext)
	return (
		<div className="product-view">
		{ maybeUser
			? 'Since you are logged in, I will show you our exclusive products! ...'
			: 'PLease log in to see our exclusive products.' }
		</div>
	)
}

export default ProductView
