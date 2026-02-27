function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
  }).format(date);
}

export function calcMonth() {
  const today = new Date();
  const past30 = new Date();
  past30.setDate(today.getDate() - 29);

  return `Last 30 Days: ${formatDate(past30)} - ${formatDate(today)}`;
}

export function calcWeek() {
  const today = new Date();
  const past7 = new Date();
  past7.setDate(today.getDate() - 6);

  return `Last 7 Days: ${formatDate(past7)} - ${formatDate(today)}`;
}
