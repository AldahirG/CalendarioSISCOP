import { tHours } from '../../index'

function create24HoursArray() {
  const hours: Array<tHours> = []
  for (let i = 0; i < 24; i++) {
    const hour = i
    const item = { text: `${i === 0 ? 24 : i}`, hour }
    hours.push(item)
  }
  // for (let i = 0; i < 12; i++) {
  //   const hour = i === 0 ? 12 : i + 12
  //   const item = { text: `pm${i === 0 ? 12 : i}`, hour }
  //   hours.push(item)
  // }
  return hours
}

export const hours24 = create24HoursArray()
