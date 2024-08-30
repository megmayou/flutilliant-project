import axios from "axios";
import "dotenv";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { notifyError, notifySuccess } from "../utils/helper";

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = loginForm;
    if (!userEmail || !userPassword) {
      notifyError("Veuillez remplir tout les champs");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          ...loginForm,
        }
      );

      setLoginForm(response.data);
      notifySuccess("Connexion réussie");
    } catch {
      notifyError("Une information est incorrect, veuillez réessayer");
    }
  };

  return (
    <section>
      <form onSubmit={loginUser}>
        <article>
          <div className="">
            <label htmlFor="userEmail">Email</label>
            <input
              required
              name="userEmail"
              id="userEmail"
              type="email"
              onChange={handleLoginChange}
            />
          </div>
          <div className="">
            <label htmlFor="userPassword">Mot de passe</label>
            <input
              required
              name="userPassword"
              id="userPassword"
              type="password"
              onChange={handleLoginChange}
            />
          </div>
        </article>
        <button type="submit" className="user-submit-btn">
          S&apos;enregistrer
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default LoginPage;
