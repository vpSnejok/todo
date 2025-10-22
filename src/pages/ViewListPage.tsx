import { useSelector } from 'react-redux'
import { ListItem } from '../components/ListItem/ListItem'
import type { ToDo } from '../models/todo-items'
import type { RootState } from '../store'

export const ViewListPage = () => {
	const todosList = useSelector((state: RootState) => state.todoList.todos)

	return (
		<div className='container'>
			{todosList.map((todo: ToDo) => (
				<ListItem key={todo.id} todo={todo} />
			))}
		</div>
	)
}
