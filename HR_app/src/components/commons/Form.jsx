import { Heading } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Input, Select, } from './InputFields'

import { Button } from './lib'

function Form({
	inputs,
	defaultValues,
	header,
	submitLabel,
	onSubmit,
	isResetAfterSubmit = false,
}) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues })

	return (
		<>
			<Heading>{header}</Heading>
			<form className='formulario'
				onSubmit={handleSubmit((data) => {
					onSubmit(data)
					if (isResetAfterSubmit) reset()
				})}
			>
				{ inputs.map((input, i) => {
					if (input.type === 'select') {
						return <Select className='hola1' key={i} register={register} {...input} />
					} else {
						return <Input className='hola2' key={i} register={register} {...input} />
					}
				})}

				{onSubmit && <Button type="submit">{submitLabel}</Button>}
			</form>
		</>
	)
}
export default Form
