export type User = {
    id: string;
    name: string;
    email: string;
    // Add other relevant user data
  };
  
  export type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
  };
  
  export type AuthAction =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };
  
  export type AuthContextType = {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
  };
  