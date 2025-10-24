import { createSlice } from '@reduxjs/toolkit'
import type { Theme } from '../models/theme'
import { themes } from '../styles/themes'

export interface ThemeState {
	theme: Theme
}

const initialState: ThemeState = {
	theme: themes['light'],
}

export const themeSlice = createSlice({
	name: 'themeList',
	initialState,
	reducers: {
		toggleThemeActions: state => {
			state.theme =
				state.theme.name === 'light' ? themes['dark'] : themes['light']
		},
	},
})

export const { toggleThemeActions } = themeSlice.actions

export default themeSlice.reducer
