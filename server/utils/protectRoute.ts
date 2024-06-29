import { H3Event } from 'h3';

// If the user does not exist on the request, throw a 401 error
export default async (event: H3Event) => {
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }

  // Check to see if this user has access to this course
  // Retrieve cookie, ensuring it's either a string or undefined
  const cookieHeader = getHeader(event, 'cookie');

  // Prepare headers, conditionally including the cookie if it exists
  const headers: HeadersInit = {};
  if (cookieHeader) {
    headers['cookie'] = cookieHeader;
  }

  // Check to see if this user has access to this course
  const hasAccess = await $fetch('/api/user/hasAccess', {
    headers: headers,
  });

  if (!hasAccess) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }
};
