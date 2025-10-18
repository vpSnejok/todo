import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { TodoList } from './pages/TodoList'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TodoList />
	</StrictMode>
)
