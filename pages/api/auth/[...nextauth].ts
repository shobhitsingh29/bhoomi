import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
}
export default (req:any, res:any) => NextAuth(req, res, options)