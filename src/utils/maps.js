export function openMap(lat, lon, name) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const url = isIOS
    ? `https://maps.apple.com/?q=${name}&ll=${lat},${lon}`
    : `https://www.google.com/maps?q=${lat},${lon}`
  window.open(url, '_blank')
}
