import course from '~/server/courseData';

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
  const chapter = course.chapters.find(
    (chapter) => chapter.slug === chapterSlug
  );

  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: 'Chapter not found',
    });
  }

  const lesson = chapter.lessons.find(
    (lesson) => lesson.slug === lessonSlug
  );

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'Lesson not found',
    });
  }

  return lesson;
});
