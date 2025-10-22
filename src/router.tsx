import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { NotFoundPage } from './pages/404'
import { ToDoListPage } from './pages/ToDoListPage'
import { ViewListItem } from './pages/ViewListItem'
import { ViewListPage } from './pages/ViewListPage'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <NotFoundPage />,
			children: [
				{ path: '/', element: <ToDoListPage /> },
				{ path: '/list', element: <ViewListPage /> },
				{ path: '/list/:id', element: <ViewListItem /> },
			],
		},
		{
			path: '*',
			element: <NotFoundPage />,
		},
	]
	// { basename: '/app/' }
)
