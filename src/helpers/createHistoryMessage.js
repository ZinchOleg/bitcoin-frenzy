export const createHistoryMessage = (message) => {
  const date = new Date()
  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
    message,
  }
}