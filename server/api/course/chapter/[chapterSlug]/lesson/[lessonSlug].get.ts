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

  return prisma.lesson.findFirst({
    where: {
      Chapter: {
        slug: chapterSlug,
      },
    },
    include: {
      Chapter: {
        select: {
          slug: true,
          title: true,
        },
      },
    },
  });
});
