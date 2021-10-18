import colors from '../../cummon/bg-color';

export default function bodyColor(weatherByLocatiion) {
	// weatherByLocatiion?.temp_c;
	const temp = weatherByLocatiion?.temp_c;

	if (temp <= -10) {
		const colorNow = hexColorToInt(colors.cold);
		return intColorToHex(colorNow);
	} else if (temp > -10 && temp < 0) {
		const colorNow = hexColorToInt(colors.cold) + Number(temp * 10);
		console.log(colorNow);
		return intColorToHex(colorNow);
	} else if (temp > 0 && temp <= 10) {
		const colorNow = hexColorToInt(colors.warm) - Number((10 - temp) * 10);
		console.log(colorNow);
		return intColorToHex(colorNow);
	} else if (temp > 10 && temp < 56) {
		const colorNow = hexColorToInt(colors.hot) + Number(temp + 200);
		console.log(colorNow);
		return intColorToHex(colorNow);
	} else if (temp > 56) {
		const colorNow = hexColorToInt(colors.hot) + 100255;
		console.log(colorNow);
		return intColorToHex(colorNow);
	}
}

const intColorToHex = int => {
	const bbggrr = ('000000' + int.toString(16)).slice(-6);
	const rrggbb =
		bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
	return '#' + rrggbb;
};

const hexColorToInt = rrggbb => {
	const bbggrr =
		rrggbb.substr(4, 2) + rrggbb.substr(2, 2) + rrggbb.substr(0, 2);
	return parseInt(bbggrr, 16);
};
