import type { RootState } from '../store'

export const saveToLocalStorage = (state: RootState) => {
	try {
		const appState = JSON.stringify(state)
		localStorage.setItem('appState', appState)
	} catch (e) {
		console.log(e)
	}
}

export const LoadFromLocalStorage = () => {
	try {
		const appState = localStorage.getItem('appState')
		if (!appState) return undefined
		return JSON.parse(appState)
	} catch (e) {
		console.log(e)
		return undefined
	}
}
