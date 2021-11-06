function dateFormatter(timestamp: number): string {
  const day = new Date(timestamp);
  return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDay()} ${day.getHours()}:${day.getMinutes()}`;
}
export default dateFormatter;