export function formatTime(isoStr: string) {
  const date = new Date(isoStr);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());

  const yyyy = date.getFullYear();
  const mmMonth = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());

  return `${yyyy}-${mmMonth}-${dd}  ${hh}:${mm}:${ss}`;
}
