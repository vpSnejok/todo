import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import type { ToDo } from './models/todo-items'

import { Layout } from './layouts/Layout'
import { NotFoundPage } from './pages/404'
import { HomePage } from './pages/HomePage'
import { ItemDescription } from './pages/ItemDescription'
import { ToDoListPage } from './pages/ToDoListPage'

const todos: ToDo[] = [
	{ id: 1, text: 'Learn React', isDone: false },
	{ id: 2, text: 'Learn TypeScript', isDone: true },
	{ id: 3, text: 'Build a ToDo App', isDone: false },
	{ id: 4, text: 'Profit!', isDone: true },
]

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <NotFoundPage />,
			children: [
				{
					path: '/', // Будет соответствовать /app/
					element: <HomePage todos={todos} />,
				},
				{
					path: '/todo', // Будет соответствовать /app/todo
					element: <ToDoListPage />,
				},
				{
					path: '/list/:id', // Будет соответствовать /app/list/:id
					element: <ItemDescription todos={todos} />,
				},
			],
		},
		{
			path: '*',
			element: <NotFoundPage />,
		},
	]
	// { basename: '/app/' }
)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
		{/* <BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage todos={todos} />} />
				<Route path='/list/:id' element={<ItemDescription todos={todos} />} />
				<Route path='/todo' element={<ToDoListPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter> */}
	</StrictMode>
)
