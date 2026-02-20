import itinerary from '../data/itinerary.json'

export default function Home() {
  const today = itinerary.days[0]
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{itinerary.trip.name}</h1>
      <p className="mt-2">{today.date} — {today.title}</p>
    </div>
  )
}
