import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<div className='container'>
			<h1>Not Found Page</h1>
			<Link to='/'>Go to Home Page</Link>
		</div>
	)
}
