function convertToTime(isoDate) {
  if (!isoDate) {
    return "-"
  }
  const date = new Date(isoDate)

  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  return time
}

function convertToNamedMonth(isoMonth) {
  const date = new Date(isoMonth + "-01")
  const options = { year: 'numeric', month: 'long' }
  const formattedMonth = date.toLocaleDateString('id-ID', options)

  return formattedMonth
}

function getTodayMonth() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const yearMonth = `${year}-${month}`

  return yearMonth
}

export default {
  convertToTime,
  convertToNamedMonth,
  getTodayMonth
}