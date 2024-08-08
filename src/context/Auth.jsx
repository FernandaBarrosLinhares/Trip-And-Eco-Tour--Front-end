import { createContext, useContext, useState } from 'react';

const API_URL = 'http://localhost:3000/';

export const AuthContext = createContext({
    user: null,
    signIn: async () => {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function signIn({ email, password }) {
        try {
            const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }

            const data = await response.json();

            if (data.length > 0) {
                const usuario = data[0];
                setUser(usuario);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const contexto = useContext(AuthContext);
    return contexto;
}