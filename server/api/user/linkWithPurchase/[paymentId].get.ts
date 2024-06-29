import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Get PaymentIntent ID from route
  const params = event.context.params as
    | {
        paymentId: string;
      }
    | undefined;

  if (!params) {
    throw createError({
      statusCode: 404,
      message: 'paymentId is missing',
    });
  }

  const { paymentId } = params;
  const user = event.context.user;

  // Update course purchase record
  try {
    await prisma.coursePurchase.update({
      where: {
        paymentId,
      },
      data: {
        userEmail: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error linking course purchase',
    });
  }

  return 200;
});
