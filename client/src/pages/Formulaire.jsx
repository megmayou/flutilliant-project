import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { notifySuccess } from "../utils/helper";

function Formulaire() {
  const [form, setForm] = useState({
    nameClient: "",
    adressClient: "",
    contractNumber: "",
    dateVisit: "",
    comment: "",
    articlesNumber: "",
    salesFigures: "",
    dateVisitForecast: "",
    articlesNumberForecast: "",
    salesFiguresForecast: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const createContactForm = (e) => {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/users`,

        form
      )
      .then((res) => {
        notifySuccess("Formulaire envoyé");
        setForm({
          nameClient: "",
          adressClient: "",
          contractNumber: "",
          dateVisit: "",
          comment: "",
          articlesNumber: "",
          salesFigures: "",
          dateVisitForecast: "",
          articlesNumberForecast: "",
          salesFiguresForecast: "",
        });
        console.info(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <form onSubmit={createContactForm}>
        <article>
          <h2>Informations Client</h2>
          <div className="">
            <label htmlFor="nameClient">Nom </label>
            <input
              required
              name="nameClient"
              id="nameClient"
              type="text"
              value={form.nameClient}
              onChange={handleFormChange}
            />
          </div>
          <div className="">
            <label htmlFor="adressClient">Adresse </label>
            <input
              required
              name="adressClient"
              id="adressClient"
              type="text"
              value={form.adressClient}
              onChange={handleFormChange}
            />
          </div>
          <div className="">
            <label htmlFor="contractNumber">N° Contrat</label>
            <input
              required
              name="contractNumber"
              id="contractNumber"
              type="text"
              value={form.contractNumber}
              onChange={handleFormChange}
            />
          </div>
        </article>
        <article>
          <h2>Rendez vous client</h2>
          <div className="">
            <label htmlFor="dateVisit">Date de visite</label>
            <input
              required
              name="dateVisit"
              id="dateVisit"
              type="text"
              value={form.dateVisit}
              onChange={handleFormChange}
            />
          </div>
          <fieldset>
            <legend>Commentaire</legend>
            <label>
              <input
                required
                name="comment"
                id="comment"
                type="text"
                value={form.comment}
                onChange={handleFormChange}
              />{" "}
            </label>
          </fieldset>
          <div className="">
            <label htmlFor="articlesNumber">
              Nombres d&apos;articles commandés
            </label>
            <input
              required
              name="articlesNumber"
              id="articlesNumber"
              type="text"
              value={form.articlesNumber}
              onChange={handleFormChange}
            />
          </div>
          <div className="">
            <label htmlFor="salesFigures">
              Chiffre d&apos;affaire de la vente
            </label>
            <input
              required
              name="salesFigures"
              id="salesFigures"
              type="text"
              value={form.salesFigures}
              onChange={handleFormChange}
            />
          </div>
        </article>

        <article>
          <h2>Prochain rendez vous</h2>
          <div className="">
            <label htmlFor="dateVisitForecast">
              Date de visite prévisionnelle
            </label>
            <input
              required
              name="dateVisitForecast"
              id="dateVisitForecast"
              type="text"
              value={form.dateVisitForecast}
              onChange={handleFormChange}
            />
          </div>
          <div className="">
            <label htmlFor="articlesNumberForecast">
              Nombres d&apos;articles prévisionnels
            </label>
            <input
              required
              name="articlesNumberForecast"
              id="articlesNumberForecast"
              type="text"
              value={form.articlesNumberForecast}
              onChange={handleFormChange}
            />
          </div>
          <div className="">
            <label htmlFor="salesFiguresForecast">
              Chiffre d&apos;affaire prévisionnel de la vente
            </label>
            <input
              required
              name="salesFiguresForecast"
              id="salesFiguresForecast"
              type="text"
              value={form.salesFiguresForecast}
              onChange={handleFormChange}
            />
          </div>
        </article>
      </form>
      <button type="submit" className="form-submit-btn">
        Envoyer le formulaire
      </button>
      <ToastContainer />
    </section>
  );
}

export default Formulaire;
