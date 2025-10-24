import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header/Header'
import type { RootState } from '../store'
import { GlobalStyle } from '../styles/GlobalStyle'

export const Layout = () => {
	const theme = useSelector((state: RootState) => state.themeList.theme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Outlet />
		</ThemeProvider>
	)
}
