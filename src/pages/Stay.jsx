import itinerary from '../data/itinerary.json'

export default function Stay() {
  return (
    <div className="p-4">
      {itinerary.hotels.map(h => (
        <div key={h.id} className="bg-white rounded-xl shadow p-4 mb-3">
          <div className="font-semibold">{h.name}</div>
          <div className="text-sm text-gray-500">{h.city}</div>
        </div>
      ))}
    </div>
  )
}