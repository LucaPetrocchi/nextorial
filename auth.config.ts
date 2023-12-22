import type { NextAuthConfig } from "next-auth";

// behavior of app depending on login status

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false // <- redirect to login if not logged in

            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }
            return true
        }
    },
    providers: []
} satisfies NextAuthConfig