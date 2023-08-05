import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { CadastroData } from "../pages/Cadastro";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode, { JwtPayload } from "jwt-decode";

interface AuthProviderProps {
  children: ReactNode
}

interface LoginResponse {
  token: string
}

export interface User {
  id: number;
  name: string;
  email: string;
  telefone: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  telefone: string;
}

export interface DecodedToken extends JwtPayload {
  id: number;
  name: string;
  email: string;
  telefone: string;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void
  loading: boolean
  userResgister: (data: CadastroData) => void
  user: User | null;
  getUsers: () => Promise<User[]>
  contactResgister: (data: Contact) => void
  getContacts: () => Promise<Contact[]>;
  contactDelete: () => void
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("your-todolist:token")

    if (!token) {
      setLoading(false)
      return
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setLoading(false)

    const userInfo = getUserInfoFromToken(token)
    if (userInfo) {
      setUser(userInfo)
    }
  }, []);

  const getUserInfoFromToken = (token: string): User | null => {
    try {
      const decodedToken = jwt_decode<DecodedToken>(token);
      const { id, name, email, telefone } = decodedToken;
      return {
        id: id,
        name,
        email,
        telefone,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("your-todolist:token", token);
      setLoading(false);

      const userInfo = getUserInfoFromToken(token)
      if (userInfo) {
        setUser(userInfo)
      }

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userResgister = async (formData: CadastroData) => {
    try {
      const register = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        telefone: formData.telefone,
      };

      await api.post("/users", register);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async (): Promise<User[]> => {
    try {
      const response = await api.get<User[]>('/users');
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const contactResgister = async (formData: Contact) => {
    try {
      const userInfo = getUserInfoFromToken(localStorage.getItem("your-todolist:token") || '');
  
      if (userInfo) {
        const register = {
          userId: userInfo.id,
          name: formData.name,
          email: formData.email,
          telefone: formData.telefone,
        };
  
        await api.post(`/contact/${userInfo.id}`, register);
        toast.success("Adicionado com sucesso!");
        
      } else {
        console.log("Usuário não encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getContacts = async (): Promise<Contact[]> => {   
    try {
      const userInfo = getUserInfoFromToken(localStorage.getItem("your-todolist:token") || '');
      if(userInfo){
        const response = await api.get<Contact[]>(`/contact/${userInfo.id}`);
        return response.data.contacts;
      } else {
        console.log("Erro");
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const contactDelete = async (contactId: number) => {
    try {
      const userInfo = getUserInfoFromToken(localStorage.getItem("your-todolist:token") || '');
      if (userInfo) {
        await api.delete(`/contact/${contactId}`);
        toast.success("Contato deletado com sucesso!");
      } else {
        console.log("Usuário não encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn, loading, userResgister, user, getUsers, contactResgister, getContacts, contactDelete }}>
      {children}
    </AuthContext.Provider>
  )
}
