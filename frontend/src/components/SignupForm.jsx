import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const initial = { nom: "", email: "", password: "", confirm: "", cgu: false };

function validate(d) {
  const e = {};
  if (d.nom.trim().length < 2) e.nom = "Entrez votre nom complet.";
  if (!/^\S+@\S+\.\S+$/.test(d.email)) e.email = "Entrez une adresse e-mail valide.";
  if (d.password.length < 8) e.password = "Le mot de passe doit contenir au moins 8 caractères.";
  if (d.confirm !== d.password) e.confirm = "Les mots de passe ne correspondent pas.";
  if (!d.cgu) e.cgu = "Acceptez les conditions d'utilisation pour continuer.";
  return e;
}

export default function SignupForm({ onSubmit }) {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

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
        <h2 className="text-2xl font-semibold text-sky-200">Compte créé</h2>
        <p className="mt-2 text-sm text-slate-400">Bienvenue, {data.nom}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold text-sky-200">Créer un compte</h1>
        <p className="mt-1 text-sm text-slate-400">Inscrivez-vous en quelques secondes.</p>
      </div>

      <Input id="nom" label="Nom complet" value={data.nom} onChange={onChange}
        placeholder="Votre nom" error={errors.nom} />
      <Input id="email" type="email" label="E-mail" value={data.email} onChange={onChange}
        placeholder="vous@exemple.com" error={errors.email} />
      <Input id="password" type="password" label="Mot de passe" value={data.password}
        onChange={onChange} placeholder="8 caractères minimum" error={errors.password} />
      <Input id="confirm" type="password" label="Confirmer le mot de passe" value={data.confirm}
        onChange={onChange} placeholder="Retapez le mot de passe" error={errors.confirm} />

      <div>
        <label className="flex items-start gap-2 text-sm text-slate-300">
          <input type="checkbox" name="cgu" checked={data.cgu} onChange={onChange}
            className="mt-0.5 h-4 w-4 accent-sky-300" />
          J'accepte les conditions d'utilisation
        </label>
        {errors.cgu && <p className="mt-1 text-xs text-rose-300">{errors.cgu}</p>}
      </div>

      <Button type="submit">Créer mon compte</Button>
    </form>
  );
}