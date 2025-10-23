import { useState, type SyntheticEvent } from 'react'
import './Form.scss'
import {
	FormBlock,
	FormControl,
	FormField,
	FormLabel,
	Wrapper,
} from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
	const [text, setText] = useState<string>('')

	const formSubmit = (event: SyntheticEvent) => {
		event.preventDefault()

		if (text) {
			props.createNewToDo(text)
			setText('')
		}
	}

	return (
		<Wrapper>
			<FormBlock action='/' onSubmit={formSubmit}>
				<FormLabel>
					<FormField
						value={text}
						type='text'
						onChange={e => setText(e.target.value)}
					/>
					<FormControl icon={plusIcon} />
				</FormLabel>
			</FormBlock>
		</Wrapper>
	)
}
