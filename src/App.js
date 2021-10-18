import { useState, useEffect } from 'react';
import { weather } from './sourse/weather-API';
import './App.css';
import { LocationCords } from './components/location-cords/location-cords';
import { SearchForm } from './components/search-form/search-form';
import bodyColor from './functions/bodyColor/bodyColor';

function App() {
	const [location, setLocation] = useState({});
	const [weatherByLocatiion, setWeatherByLocatiion] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success, error);
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = bodyColor(weatherByLocatiion);
	}, [weatherByLocatiion]);

	function success(pos) {
		const { latitude, longitude } = pos.coords;
		weather
			.fetchWeatherByLocation({ latitude, longitude })
			.then(weather => setWeatherByLocatiion(weather.current));
		setLocation({ latitude, longitude });
		localStorage.setItem('location', JSON.stringify(pos.coords));
	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	return (
		<div className='cantainer'>
			<div className='position-absolute top-50 start-50 translate-middle'>
				<img
					src={`http:${weatherByLocatiion?.condition?.icon}`}
					className=' w-100'
					alt='broken'
				/>
			</div>
			<LocationCords location={location} />
			<SearchForm />
		</div>
	);
}

export default App;
