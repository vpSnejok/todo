import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { ToDo } from '../models/todo-items'

export interface ToDoState {
	todos: ToDo[]
}

const initialState: ToDoState = {
	todos: [],
}

export const toDoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		createAction: (state, action: PayloadAction<string>) => {
			const newToDo: ToDo = {
				id: state.todos.length,
				text: action.payload,
				isDone: false,
			}
			state.todos = [...state.todos, newToDo]
			toast.success('Add new task!')
		},
		updateAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.map(item => {
				if (item.id === action.payload.id) {
					item.isDone = !item.isDone
					toast.success('Update task!')
				}
				return item
			})
			state.todos = newTodos
		},
		removeAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
			state.todos = newTodos

			toast.success('Remove task!')
		},
	},
})

export const { createAction, updateAction, removeAction } = toDoSlice.actions

export default toDoSlice.reducer
