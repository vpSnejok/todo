import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/toDoList'
import { LoadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
	},
	preloadedState: LoadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
