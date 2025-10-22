import { Link } from 'react-router-dom'
import type { ToDo } from '../../models/todo-items'
import classes from './ListITem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
	return (
		<>
			<Link
				className={`${classes.link} ${
					todo.isDone ? classes.done : classes.notDone
				}`}
				to={`/list/${todo.id}`}
			>
				{todo.text}
			</Link>
		</>
	)
}
