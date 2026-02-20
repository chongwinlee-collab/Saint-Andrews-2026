import itinerary from '../data/itinerary.json'

export default function Timeline() {
  return (
    <div className="p-4">
      {itinerary.days.map(d => (
        <div key={d.date} className="bg-white rounded-xl shadow p-4 mb-3">
          <div className="font-semibold">{d.title}</div>
          <div className="text-sm text-gray-500">{d.date}</div>
        </div>
      ))}
    </div>
  )
}

