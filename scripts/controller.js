const url = "https://api.open-meteo.com/v1/forecast?latitude=42.03&longitude=-93.62&daily=weathercode,temperature_2m_max,sunrise,sunset,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FChicago"

fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));
