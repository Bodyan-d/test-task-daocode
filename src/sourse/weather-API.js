const USER_KEY = '0a673b566c674ddcb7d195141211510';

function fetchWeatherByLocation(cords) {
	return fetch(
		`http://api.weatherapi.com/v1/current.json?key=${USER_KEY} &q=${`${cords.latitude},${cords.longitude}`}`
	).then(res => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error('Location not found'));
	});
}

function fetchWeatherByName(name) {
	return fetch(
		`http://api.weatherapi.com/v1/current.json?key=${USER_KEY} &q=${name}`
	).then(res => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error('City not found'));
	});
}

export const weather = {
	fetchWeatherByLocation,
	fetchWeatherByName,
};
