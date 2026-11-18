import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const initial = { email: "", password: "" };

function validate(d) {
  const e = {};
  if (!/^\S+@\S+\.\S+$/.test(d.email)) e.email = "Entrez une adresse e-mail valide.";
  if (!d.password) e.password = "Entrez votre mot de passe.";
  return e;
}

export default function LoginForm({ onSubmit }) {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    onSubmit?.(data);
    setDone(true);
  };

  if (done) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-sky-200">Connexion réussie</h2>
        <p className="mt-2 text-sm text-slate-400">Content de vous revoir.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-sky-200">Connexion</h1>
        <p className="mt-1 text-sm text-slate-400">Accédez à votre compte.</p>
      </div>

      <Input id="email" type="email" label="E-mail" value={data.email} onChange={onChange}
        placeholder="vous@exemple.com" error={errors.email} />
      <Input id="password" type="password" label="Mot de passe" value={data.password}
        onChange={onChange} placeholder="Votre mot de passe" error={errors.password} />

      <Button type="submit">Se connecter</Button>

      <p className="text-center text-sm text-slate-400">
        Pas encore de compte ?{" "}
        <Link to="/inscription" className="text-sky-300 hover:underline">
          S'inscrire
        </Link>
      </p>
    </form>
  );
}