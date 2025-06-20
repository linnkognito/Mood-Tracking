import { getToken } from 'next-auth/jwt';

/**
 * Retrieves the session token from NextAuth in middleware-safe way.
 * @param {NextRequest} req - The Next.js request object
 * @returns {Promise<null | object>} - The decoded session or null
 */
export async function getSessionToken(req) {
  return await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
}
