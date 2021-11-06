function dateFormatter(timestamp: number): string {
  if (!timestamp) {
    return "";
  }
  const day = new Date(timestamp);
  return `${day.getFullYear()}-${day.getMonth() + 1 < 10 ? "0" + (day.getMonth() + 1) : day.getMonth() + 1}-${day.getDay() < 10 ? "0" + day.getDay() : day.getDay() } ${day.getHours() < 10 ? "0"+day.getHours(): day.getHours()}:${day.getMinutes() < 10 ? "0" + day.getMinutes(): day.getMinutes()}`;
}
export default dateFormatter;