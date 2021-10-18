// import { useEffect, useState } from 'react';
// import { weather } from '../../sourse/weather-API';
import './location-cords.css';

export function LocationCords({ location }) {
	return (
		<div className='cords'>
			<ul className='location'>
				<li className='locationItem'>{location.latitude}</li>
				<li className='locationItem'>{location.longitude}</li>
			</ul>
		</div>
	);
}
