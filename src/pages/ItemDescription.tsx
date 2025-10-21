import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { ToDo } from '../models/todo-items'

interface ItemDescriptionProps {
	todos: ToDo[]
}

export const ItemDescription = ({ todos }: ItemDescriptionProps) => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [todo, setToto] = useState<ToDo | null>(null)

	useEffect(() => {
		const searchTodo = todos.find(todo => String(todo.id) === id)

		if (searchTodo) {
			setToto(searchTodo)
		} else {
			navigate('/404')
		}
	}, [todos, id, navigate])

	return (
		<div className='container'>
			<h1>{todo?.text}</h1>

			<button onClick={() => navigate(-1)}>Назад</button>
		</div>
	)
}
