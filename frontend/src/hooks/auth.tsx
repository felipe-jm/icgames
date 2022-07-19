import { notification } from "antd";
import React, { createContext, useCallback, useState, useContext } from "react";
import { api } from "../services/api";
import { history } from "../services/history";

type User = {
  id: string;
  username: string;
  email: string;
};

type AuthState = {
  access_token: string;
  user: User;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type SignUpParams = {
  password1: string;
  password2: string;
  first_name: string;
  email: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpParams): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const access_token = localStorage.getItem("@ICGames:access_token");
    const user = localStorage.getItem("@ICGames:user");

    if (access_token && user) {
      api.defaults.headers.common = {
        Authorization: `Bearer ${access_token}`,
      };

      return { access_token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("api/token/", { email, password });

    const { access_token, user } = response.data;

    localStorage.setItem("@ICGames:access_token", access_token);
    localStorage.setItem("@ICGames:user", JSON.stringify(user));

    api.defaults.headers.common = {
      Authorization: `Bearer ${access_token}`,
    };

    setData({ access_token, user });
  }, []);

  const signUp = async ({
    password1,
    password2,
    first_name,
    email,
  }: SignUpParams) => {
    try {
      await api.post("/rest-auth/registration/", {
        password1,
        password2,
        first_name,
        email,
      });

      notification.success({
        message: "Você foi cadastrado com sucesso! Realize o login.",
      });

      history.push("/sign-in");
    } catch (err) {
      notification.error({
        message: "Não foi possível realizar o cadastro.",
      });
    }
  };

  const signOut = useCallback(() => {
    localStorage.removeItem("@ICGames:access_token");
    localStorage.removeItem("@ICGames:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
