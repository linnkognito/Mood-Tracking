// export { default } from 'next-auth/middleware';

// export const config = {
//   matcher: ['/user/:path*'],
// };

import { NextResponse } from 'next/server';
import { auth } from 'next-auth/middleware';

export function middleware(req) {
  if (process.env.NODE_ENV === 'production') {
    return auth(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/user/:path*'],
};
