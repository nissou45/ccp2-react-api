import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

const shema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "MIN 8 caractères"),
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(shema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      console.log(res.data);
      alert("Vous êtes connecté");
      navigate("/profile");
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-box">
        <h2>Fake Pronote</h2>
        <p>Connexion Professeur</p>

        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Se connecter</button>
      </div>
    </form>
  );
}
