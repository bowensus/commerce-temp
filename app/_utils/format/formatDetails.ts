export function formatDetails(title: string, description: string) {
  const maxLength = 60;

  const combined = title + ' | ' + description;
  if (combined.length <= maxLength) {
    return combined;
  }

  let truncated = combined.slice(0, maxLength);

  const lastSpaceIndex = truncated.lastIndexOf(' ');
  if (lastSpaceIndex > 0) {
    truncated = truncated.slice(0, lastSpaceIndex) + '...';
  }

  return truncated;
}
