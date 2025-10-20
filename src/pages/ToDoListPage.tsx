import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Form } from '../components/Form/Form'
import { Header } from '../components/Header/Header'
import { ToDoList } from '../components/ToDoList/ToDoList'
import type { ToDo } from '../models/todo-items'

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([])

	const createNewToDo = (text: string) => {
		const newToDo: ToDo = {
			id: todos.length,
			text: text,
			isDone: false,
		}
		setTodos([...todos, newToDo])

		toast.success('Add new task!')
	}

	const updateToDo = (toDoItem: ToDo) => {
		const newTodos = todos.map(item => {
			if (item.id === toDoItem.id) {
				item.isDone = !item.isDone
				toast.success('Update task!')
			}
			return item
		})
		setTodos(newTodos)
	}

	const remove = (toDoItem: ToDo) => {
		const newTodos = todos.filter(todo => todo.id !== toDoItem.id)
		setTodos(newTodos)

		toast.success('Remove task!')
	}

	return (
		<>
			<Header />
			<Form createNewToDo={createNewToDo} />
			<ToDoList todos={todos} updateToDo={updateToDo} remove={remove} />
			<ToastContainer position='bottom-right' />
		</>
	)
}
