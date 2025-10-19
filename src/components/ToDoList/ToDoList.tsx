import './ToDoList.scss'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'

export const ToDoList = () => {
	return (
		<div className='todo-container'>
			<ul className='todo-list failed'>
				<ToDoListItem />
			</ul>
		</div>
	)
}
