import { ListItem } from '../components/ListItem/ListItem'
import type { ToDo } from '../models/todo-items'

interface HomePageProps {
	todos: ToDo[]
}

export const HomePage = ({ todos }: HomePageProps) => {
	return (
		<div className='container'>
			{todos.map((todo: ToDo) => (
				<ListItem key={todo.id} todo={todo} />
			))}
		</div>
	)
}
