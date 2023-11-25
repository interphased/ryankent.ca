export const calculate = (article: string, wpm: number = 220) => {
  const regexCss = /class="[^"]*"/g;
  const regexHtml = /<!--\s*HTML_TAG_START\s*-->.*?<!--\s*HTML_TAG_END\s*-->/gs;
  const cleaned = article.trim().replace(regexCss, '').replace(regexHtml, '');
  const wordCount = cleaned.split(/\s+/).length;
  const time = Math.ceil(wordCount / wpm);

  return time;
}