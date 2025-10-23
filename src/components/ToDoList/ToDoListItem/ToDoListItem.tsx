import type { ToDo } from '../../../models/todo-items'
import './ToDoListItem.scss'
import {
	ToDoItem,
	ToDoItemControl,
	ToDoItemControls,
	ToDoItemText,
} from './TodoListItem.styled'

import checkIcon from '../../../assets/images/check.png'
import trashIcon from '../../../assets/images/trash.png'
import uncheckIcon from '../../../assets/images/uncheck.png'

export const ToDoListItem = (props: {
	toDoItem: ToDo
	updateToDo: Function
	remove: Function
}) => {
	return (
		<ToDoItem>
			<ToDoItemText>{props.toDoItem.text}</ToDoItemText>
			<ToDoItemControls>
				<ToDoItemControl
					icon={trashIcon}
					onClick={() => props.remove(props.toDoItem)}
				/>
				<ToDoItemControl
					icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
					onClick={() => props.updateToDo(props.toDoItem)}
				/>
			</ToDoItemControls>
		</ToDoItem>
	)
}
