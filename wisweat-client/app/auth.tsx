import NextAuth from "next-auth";
import Google from "next-auth/providers/google"

export const {
  handlers,
  auth,
} = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log(profile)
      return true
    }
  }
})