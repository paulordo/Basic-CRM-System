import  { useState, createContext, type Dispatch, type SetStateAction, type ReactNode } from "react";

interface AuthContextType {
    logado: boolean;
    setLogado: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType >({
    logado: false,
    setLogado: () => {},
});

function AuthProvider(props: {children: ReactNode}) {
    let isLogado = localStorage.getItem("logado");
    const [logado, setLogado] = useState(isLogado === "S");

    return (
        <AuthContext.Provider value={{ logado, setLogado }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;