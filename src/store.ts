import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeList'
import todoReducer from './features/toDoList'
import { LoadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		themeList: themeReducer,
	},
	preloadedState: LoadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
