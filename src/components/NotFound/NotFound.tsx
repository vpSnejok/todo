// import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import classes from './NotFound.module.scss'

export const NotFound = () => {
	const navigate = useNavigate()

	const handleGoHome = () => {
		navigate('/')
	}

	return (
		<>
			{/* <Helmet>
				<title>404 - Страница не найдена</title>
			</Helmet> */}

			<div className={classes.notFoundContainer}>
				<div className={classes.stars}></div>

				<div className={classes.centralContent}>
					<div className={classes.astronaut}>
						<div className={classes.helmet}></div>
						<div className={classes.body}></div>
					</div>

					<h1 className={classes.errorCode}>404</h1>
					<h2 className={classes.errorMessage}>
						Ой! Кажется, мы потерялись в космосе
					</h2>
					<p className={classes.errorDescription}>
						Страница, которую вы ищете, не существует или была перемещена.
					</p>

					<button className={classes.homeButton} onClick={handleGoHome}>
						Вернуться на Главную
					</button>
				</div>

				<div className={classes.planet}></div>
			</div>
		</>
	)
}
