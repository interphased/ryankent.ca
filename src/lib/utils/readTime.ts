export const calculate = (article: string) => {
  const wpm = 220;
  const words = article.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}