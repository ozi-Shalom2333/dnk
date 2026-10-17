"use client";

import { createContext, useContext, useEffect, useReducer, useState, type ReactNode } from "react";
import { type User } from "firebase/auth";
import { firebaseConfigured, getClientAuth } from "@/lib/firebase";
import { authMessage, observeSession, signOutAccount } from "@/lib/auth";
interface AuthContextValue {
  user: User | null;
  loading: boolean;
  configured: boolean;
  error: string | null;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}
const AuthContext = createContext<AuthContextValue | null>(null);
export function AuthProvider({
  children
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<{
    user: User | null;
    loading: boolean;
    error: string | null;
  }>({
    user: null,
    loading: firebaseConfigured,
    error: null
  });
  const [, refresh] = useReducer(n => n + 1, 0);
  useEffect(() => {
    if (!firebaseConfigured) return;
    try {
      return observeSession(user => setState({
        user,
        loading: false,
        error: null
      }), error => setState({
        user: null,
        loading: false,
        error: authMessage(error)
      }));
    } catch {
      queueMicrotask(() => setState({
        user: null,
        loading: false,
        error: "Firebase could not initialize. Check the account configuration."
      }));
    }
  }, []);
  const logout = async () => {
    await signOutAccount();
    setState({
      user: null,
      loading: false,
      error: null
    });
  };
  const refreshUser = async () => {
    const user = getClientAuth().currentUser;
    if (user) await user.reload();
    setState({
      user: getClientAuth().currentUser,
      loading: false,
      error: null
    });
    refresh();
  };
  return <AuthContext.Provider value={{
    ...state,
    configured: firebaseConfigured,
    logout,
    refreshUser
  }}>
    {children}
  </AuthContext.Provider>;
}
export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("AuthProvider is required");
  return value;
}
