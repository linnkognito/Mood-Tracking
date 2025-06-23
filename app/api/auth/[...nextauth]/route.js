import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUser } from '@/app/_api/usersApi';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          const res = await loginUser({ email, password });
          if (!res?.token || !res?.user) return null;
          return { ...res.user, token: res.token };
        } catch (err) {
          console.error('[NextAuth] authorize() error:', err);
          return null;
        }
      },
      callbacks: {
        async jwt({ token, user }) {
          if (user) token.accessToken = user.token;
          return token;
        },
        async session({ session, token }) {
          session.user.accessToken = token.accessToken;
          return session;
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
