export default function Content({ weatherCity, status, error }) {
	console.dir(error?.message);
	if (status === 'rejected') {
		return <h2>{error.message}</h2>;
	}

	return (
		<>
			{weatherCity && (
				<div className='card mb-10 w-25'>
					<div className='row g-0'>
						<div className='col-md-3 pr-0'>
							<img
								src={`http:${weatherCity?.current?.condition?.icon}`}
								className='img-fluid rounded-center w-100'
								alt='broken'
							/>
						</div>
						<div className='col-md-9'>
							<div className='card-body pl-0'>
								<div className='d-flex'>
									<h5 className='card-title mr-2'>
										{weatherCity?.location?.name}
									</h5>
									<p className='card-text '>
										{weatherCity?.current?.condition?.text}
									</p>
								</div>

								<p className='card-text'>
									{weatherCity?.current?.temp_c}
									{`\u00B0`}C feelslike
									{weatherCity?.current?.feelslike_c}
									{`\u00B0`}C, wind {weatherCity?.current?.wind_kph}km/h
								</p>

								<p className='card-text'>
									<small className='text-muted'>
										Geo coords: lat: {weatherCity?.location?.lat}, lon:
										{weatherCity?.location?.lon}
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
