export default defineEventHandler((event) => {
  if (!event.context.params) {
    throw new Error(
      'Parameters are missing from the request'
    );
  }
  const { chapterSlug, lessonSlug } = event.context
    .params as Record<string, string> & {
    chapterSlug: string;
    lessonSlug: string;
  };
  return `Lesson "${lessonSlug}" in chapter "${chapterSlug}"`;
});
