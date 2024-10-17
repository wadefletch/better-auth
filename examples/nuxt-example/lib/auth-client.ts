import { createAuthClient } from "better-auth/vue";
import { ssrPlugin } from "better-auth/nuxt";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
});

export const {
	signIn,
	signOut,
	signUp,
	useSession,
	forgetPassword,
	resetPassword,
} = authClient;
