import { PrismaClient } from '@prisma/client';
import protectRoute from '~/server/utils/protectRoute';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // We allow users to access the first lesson without being logged in
  if (event.context.params?.chapterSlug !== '1-chapter-1') {
    protectRoute(event);
  }

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
