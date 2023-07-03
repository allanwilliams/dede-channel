/* 
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { getToken } from "../../../services/auth";
import api from "../../../services/api";
import users from '../../../services/usuario'

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60 ,
  },
  providers: [
    CredentialsProvider({
      name: "Nossa",
      async authorize(credentials, req) {
        const defaultToken = await getToken('dona.dede', 'dpgeceti')
        api.defaults.headers.Authorization = `Bearer ${defaultToken.data.access}`
        if (defaultToken.status == 200){
          const res = await getToken(credentials.email, credentials.password)
          if (res.status == 200){
            const params =
            {
              username: credentials.email,
              groups__in:'CALCULADORA,DEFENSORES - PADRÃO, ESTAGIÁRIOS - PADRÃO, TRIAGEM - PADRÃO'
            }
            const result = await users.users({ params })
            const user = result.data.results[0]
            if (user.is_active) {
              return {
                username: user.username,
                matricula: user.matricula,
                is_active: user.is_active,
                nome: `${user.first_name} ${user.last_name}`,
                email: user.email,
                papel: user.papel.titulo
              }
            }
          }
        }
        return null
        
      },
    })
  ],
  secret:'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx6gts=',
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    }
  }
}
export default NextAuth(authOptions)

*/