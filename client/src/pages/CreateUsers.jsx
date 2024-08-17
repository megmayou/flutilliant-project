import axios from "axios";
import "dotenv";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { notifySuccess, notifyError } from "../utils/helper";

function CreateUsers() {
  const [user, setUser] = useState({
    userName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    userRoles: 2,
  });

  const handleUsersChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = (e) => {
    e.preventDefault();
    if (
      user.userName !== "" &&
      user.userLastName !== "" &&
      user.userEmail !== "" &&
      user.userPassword !== "" &&
      user.confirmPassword !== ""
    ) {
      if (user.userPassword === user.confirmPassword) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/api/users`, { ...user })
          .then((res) => {
            notifySuccess();
            setUser({
              userName: "",
              userLastName: "",
              userEmail: "",
              userPassword: "",
              confirmPassword: "",
              userRoles: 2,
            });
            console.info(res);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        notifyError("Les mots de passe ne correspondent pas !");
      }
    } else {
      notifyError(
        "Il nous manque une information, vérifiez que vous avez rempli tous les champs"
      );
    }
  };
  console.log(user);
  return (
    <section>
      <form onSubmit={createUser}>
        <article>
          <div className="">
            <label htmlFor="userName">Prénom</label>
            <input
              required
              name="userName"
              id="userName"
              type="text"
              value={user.userName}
              onChange={handleUsersChange}
            />
          </div>
          <div className="">
            <label htmlFor="userLastName">Nom</label>
            <input
              required
              name="userLastName"
              id="userLastName"
              type="text"
              value={user.userLastName}
              onChange={handleUsersChange}
            />
          </div>
          <div className="">
            <label htmlFor="userEmail">Email</label>
            <input
              required
              name="userEmail"
              id="userEmail"
              type="email"
              value={user.userEmail}
              onChange={handleUsersChange}
            />
          </div>
          <div className="">
            <label htmlFor="userPassword">Mot de passe</label>
            <input
              required
              name="userPassword"
              id="userPassword"
              type="password"
              value={user.userPassword}
              onChange={handleUsersChange}
            />
          </div>
          <div className="">
            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
            <input
              required
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={user.confirmPassword}
              onChange={handleUsersChange}
            />
          </div>
        </article>
        <button type="submit" className="user-submit-btn">
          Envoyer le formulaire
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default CreateUsers;
