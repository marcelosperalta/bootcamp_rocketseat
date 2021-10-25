import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextDate = {
    user: User | null;
    signInUrl: string;
}

// const AuthContext = createContext(null);
export const AuthContext = createContext({} as AuthContextDate);

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export function AuthProvider(props: AuthProvider) {
    const [ user, setUser ] = useState<User | null>(null)

 // const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${}&redirect_uri=http://localhost:3000`
 // client_id = GitHub > Settings > Developer settings > OAuth Apps > "oauth_app_name" > Client ID
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=5dae87ac752ec4f86765`

    async function signIn(gitHubCode: string) {
        const response = await api.post<AuthResponse>("authenticate", {
            code: gitHubCode,
        })

        const { token, user } = response.data;

        localStorage.setItem("@dowhile:token", token);

        // console.log(user);
        setUser(user)
    }

    useEffect(() => {
        const url = window.location.href;
        const hasGitHubCode = url.includes("?code=");

        if (hasGitHubCode) {
            const [urlWithoutCode, gitHubCode] = url.split("?code=");

            // console.log({ urlWithoutCode, gitHubCode});
            // limpar URL
            window.history.pushState({}, "", urlWithoutCode);

            signIn(gitHubCode);
        }
    }, [])


    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {props.children}
        </AuthContext.Provider>
    );
}