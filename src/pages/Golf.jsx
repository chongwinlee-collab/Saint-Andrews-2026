import itinerary from '../data/itinerary.json'

export default function Golf() {
  return (
    <div className="p-4">
      {itinerary.golf.map(g => (
        <div key={g.course} className="bg-white rounded-xl shadow p-4 mb-3">
          <div className="font-semibold">{g.course}</div>
          <div className="text-sm">{g.date} @ {g.teeTime}</div>
        </div>
      ))}
    </div>
  )
}
