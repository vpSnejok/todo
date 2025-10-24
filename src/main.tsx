import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { router } from './router'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <HelmetProvider> */}
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>

		{/* </HelmetProvider> */}

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
