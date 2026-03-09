import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "MIN 8 characters SVP"),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/register", data);
      console.log(res.data);
      alert("Vous vous etes bien enregistré");
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <form className="register-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-box">
        <h1>Inscription</h1>

        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">S'inscrire</button>
      </div>
    </form>
  );
};

export default Register;
