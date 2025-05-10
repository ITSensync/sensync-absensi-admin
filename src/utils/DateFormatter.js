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

export default {
  convertToTime,
}