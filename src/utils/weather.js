## src/utils/weather.js

export async function getWeather(lat, lon) {
  const key = import.meta.env.VITE_WEATHER_KEY
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
  )
  return res.json()
}

