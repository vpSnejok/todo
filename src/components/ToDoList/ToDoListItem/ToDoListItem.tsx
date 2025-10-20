import type { ToDo } from '../../../models/todo-items'
import './ToDoListItem.scss'

export const ToDoListItem = (props: {
	toDoItem: ToDo
	updateToDo: Function
	remove: Function
}) => {
	return (
		<li className='todo-list-item__wrapper'>
			<span>{props.toDoItem.text}</span>
			<div className='todo-list-item__buttons'>
				<button
					className='btn-trash'
					onClick={() => props.remove(props.toDoItem)}
				/>
				<button
					className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
					onClick={() => props.updateToDo(props.toDoItem)}
				/>
			</div>
		</li>
	)
}
