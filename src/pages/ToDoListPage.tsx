import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { createAction, removeAction, updateAction } from '../features/toDoList'
import type { ToDo } from '../models/todo-items'
import type { RootState } from '../store'

export const ToDoListPage = () => {
	const todoList = useSelector((state: RootState) => state.todoList.todos)
	const dispatch = useDispatch()

	const createNewToDo = (text: string) => {
		dispatch(createAction(text))
	}

	const updateToDo = (toDoItem: ToDo) => {
		dispatch(updateAction(toDoItem))
	}

	const remove = (toDoItem: ToDo) => {
		dispatch(removeAction(toDoItem))
	}

	return (
		<>
			<Form createNewToDo={createNewToDo} />
			<ToDoList todos={todoList} updateToDo={updateToDo} remove={remove} />
			<ToastContainer position='bottom-right' />
		</>
	)
}
