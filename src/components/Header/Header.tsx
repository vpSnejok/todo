import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import './Header.scss'

export const Header = () => {
	const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
		return isActive ? `${classes.active} ${classes.link}` : classes.link
	}

	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<NavLink to='/' className={getActiveClass}>
					Home
				</NavLink>
				<NavLink to='/todo' className={getActiveClass}>
					ToDo
				</NavLink>
				{/* <a href='/' className={classes.link}>
					Home
				</a>
				<a href='/todo' className={classes.link}>
					ToDo
				</a> */}
			</div>
		</header>
	)
}
