export function padHours(hour: number) {
  const [newHour, isPM] = conv24To12(hour)
  if (newHour < 10) {
    return [`0${newHour}`, isPM]
  }
  return [`${newHour}`, isPM]
}

export function padMinutes(min: number) {
  if (min < 10) {
    return `0${min}`
  }
  return `${min}`
}

export function conv24To12(hour: number) {
  if (hour === 12) {
    return [hour, 1]
  }
  return [hour % 12, Math.floor(hour / 12)]
}