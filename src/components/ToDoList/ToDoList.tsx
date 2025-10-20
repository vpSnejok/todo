import type { ToDo } from '../../models/todo-items'
import './ToDoList.scss'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'

export const ToDoList = (props: {
	todos: ToDo[]
	updateToDo: Function
	remove: Function
}) => {
	const checkedList = () => {
		return props.todos
			.filter(item => !item.isDone)
			.map(item => (
				<ToDoListItem
					key={item.id}
					toDoItem={item}
					updateToDo={props.updateToDo}
					remove={props.remove}
				/>
			))
	}

	const unCheckedList = () => {
		return props.todos
			.filter(item => item.isDone)
			.map(item => (
				<ToDoListItem
					key={item.id}
					toDoItem={item}
					updateToDo={props.updateToDo}
					remove={props.remove}
				/>
			))
	}

	return (
		<div className='todo-container'>
			<ul className='todo-list failed'>{checkedList()}</ul>
			<ul className='todo-list completed'>{unCheckedList()}</ul>
		</div>
	)
}
