import { useState } from 'react';
import { weather } from '../../sourse/weather-API';
import Content from '../content/content';

export function SearchForm() {
	const [value, setValue] = useState(' ');
	const [weatherCity, setWeatherCity] = useState(null);
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setStatus('pending');
		weather
			.fetchWeatherByName(value)
			.then(weather => {
				setWeatherCity(weather);
				setStatus('resolved');
			})
			.catch(error => {
				setStatus('rejected');
				setError(error);
			});
		setValue(' ');
	};


	return (
		<>
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-row align-items-center'>
					<div className='col-sm-3 my-1'>
						<input
							onChange={handleChange}
							value={value}
							type='text'
							className='form-control'
							id='inlineFormInputName'
							placeholder='Location'
						/>
					</div>
					<div className='col-auto my-1'>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</div>
				</div>
			</form>
			{weatherCity && (
				<Content weatherCity={weatherCity} status={status} error={error} />
			)}
		</>
	);
}
