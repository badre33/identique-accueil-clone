const stripArticleHtml = (content: string) =>
  content
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-zA-Z0-9#]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const getArticleWordCount = (content: string) => {
  const text = stripArticleHtml(content);
  return text ? text.split(" ").length : 0;
};

export const getArticleReadingTime = (content: string, isArabic = false) => {
  const wordsPerMinute = isArabic ? 170 : 210;
  return Math.max(1, Math.ceil(getArticleWordCount(content) / wordsPerMinute));
};
