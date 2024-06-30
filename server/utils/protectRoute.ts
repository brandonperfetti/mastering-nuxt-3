import { H3Event } from 'h3';

// If the user does not exist on the request, throw a 401 error
export default async (event: H3Event) => {
  if (!event.context.user) {
    console.error('No user in context');
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: No user found in session',
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
  try {
    const hasAccess = await $fetch('/api/user/hasAccess', { headers });
    // console.log('User has access:', hasAccess);

    if (!hasAccess) {
      throw new Error('Access denied for this course');
    }
  } catch (error) {
    console.error('Error checking access:', error);
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Failed to verify course access',
    });
  }
};
