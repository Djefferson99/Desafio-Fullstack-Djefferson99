import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Conteiner, ConteinerDiv, Form, Err } from "./styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<LoginData>({
        resolver: zodResolver(schema)
    });
    
    const { signIn } = useAuth();
    const navigate = useNavigate();

    
    const handleSignUp = () => {
        navigate("/cadastro");
    };

    return (
        <Conteiner>
            <ConteinerDiv>
                <h3>Hub Connection</h3>
                <p>Criando conexões, abrimos portas para novas oportunidades e ampliamos nosso horizonte de possibilidades.</p>
            </ConteinerDiv>
            <Form>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email..." {...register("email")} />
                    {errors.email && <Err>{errors.email.message}</Err>}

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password"placeholder="Senha..." {...register("password")} />
                    {errors.password && <Err>{errors.password.message}</Err>}

                    <button type="submit" >Entrar</button>
                    <p>ou</p>
                    <button type="button" onClick={handleSignUp}>Cadastre-se</button>
                </form>
            </Form>
        </Conteiner>
    );
};
