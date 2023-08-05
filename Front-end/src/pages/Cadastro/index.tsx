import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Conteiner, ConteinerDiv, Err, Form } from "../Login/styles";
import { schema } from "./validator";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";



 export interface CadastroData {
  name: string;
  email: string;
  password: string;
  telefone: string;
}

export const Cadastro = () => {
  const { userResgister } = useAuth();
  const { register, handleSubmit,  formState: { errors } } = useForm<CadastroData>({
    resolver: zodResolver(schema)
  });


  const navigate = useNavigate();

    
  const handleSignUp = () => {
      navigate("/");
  };

  return (
    <Conteiner>
      <ConteinerDiv>
        <h3>Hub Connection</h3>
        <p>Criando conexões, abrimos portas para novas oportunidades e ampliamos nosso horizonte de possibilidades.</p>
      </ConteinerDiv>
      <Form>
        <h2>Cadastro</h2>
        <form noValidate onSubmit={handleSubmit(userResgister)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Nome..." {...register("name")} />
          {errors.name && <Err>{errors.name.message}</Err>}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email.." {...register("email")} />
          {errors.email && <Err>{errors.email.message}</Err>}

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha..." {...register("password")} />
          {errors.password && <Err>{errors.password.message}</Err>}
       
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" placeholder="Telefone..."{...register("telefone")} />
          {errors.telefone && <Err>{errors.telefone.message}</Err>}

          <button type="submit">Cadastrar</button>

          <button type="button" onClick={handleSignUp}>Voltar ao login</button>

        </form>
      </Form>
    </Conteiner>
  );
};
