import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const params = event.context.params as
    | {
        chapterSlug: string;
        lessonSlug: string;
      }
    | undefined;

  if (!params) {
    throw createError({
      statusCode: 404,
      message: 'Parameters are missing',
    });
  }
  const { chapterSlug, lessonSlug } = params;

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug,
      },
    },
  });

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found',
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  };
});
