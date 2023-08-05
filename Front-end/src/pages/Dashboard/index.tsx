import { useContext, useEffect, useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { AuthContext, Contact, User } from '../../providers/AuthProvider';
import { Conteiner, Title, Header, Delete } from './styles';
import { Err } from '../Login/styles';
import { schema } from './validator';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {
  const { getUsers } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const { contactResgister } = useAuth();
  const { getContacts } = useContext(AuthContext);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Contact>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const usersList = await getUsers();
      setUsers(usersList);
    };
    fetchUsers();
  }, [getUsers]);

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsData = await getContacts();
      setContacts(contactsData);
    };
    fetchContacts();
  }, [getContacts]);
  
  const navigate = useNavigate(); 
  const signOut = () => {
    localStorage.removeItem("your-todolist:token");
    navigate("/");
  };

  const onSubmit = async (data: Contact) => {
    await contactResgister(data);
    reset();
    await getContacts(); 
    navigate("/dashboard");
  };

  const { contactDelete } = useContext(AuthContext);

  const handleDeleteContact = async (contactId: number) => {
    if (window.confirm("Deseja mesmo deletar esse contato?")) {
      await contactDelete(contactId);
      reset();
      await getContacts();
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <Header>
        <Title>Bem-vindo(a), ao Hub Connection!</Title>
        <button type={'button'} onClick={signOut}>Sair</button>
      </Header>
      <Conteiner>
        <div>
          <h3>Lista de Contatos</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <p>Nome: <span>{user.name}</span></p>
                <p>Email: <span>{user.email}</span></p>
                <p>Telefone: <span>{user.telefone}</span></p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Adicione Contatos</h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Nome..." {...register("name")} />
              {errors.name && <Err>{errors.name.message}</Err>}

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email.." {...register("email")} />
              {errors.email && <Err>{errors.email.message}</Err>}

              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" placeholder="Telefone..." {...register("telefone")} />
              {errors.telefone && <Err>{errors.telefone.message}</Err>}

              <button type="submit">Cadastrar</button>
            </form>
            <h3>Seus Contatos</h3>
            <ul>
            {Array.isArray(contacts) && contacts.length > 0 ? (
                contacts.map((contact) => (
                    <li key={contact.id}>
                        <p>Nome: <span>{contact.name}</span></p>
                        <p>Email: <span>{contact.email}</span></p>
                        <p>Telefone: <span>{contact.telefone}</span></p>

                        <Delete onClick={() => handleDeleteContact(contact.id)}>Excluir</Delete>
                    </li>
                ) )
            ) : (
             <li>
                <p>
                    <span>Nenhum contato encontrado</span> 
                </p>
            </li>
            )}
            </ul>
          </div>
        </div>
      </Conteiner>
    </div>
  );
};
