import axios from "axios";
import "dotenv";
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

  const createContactForm = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${import.meta.env.VITE_API_URL}/api/formulaires`, { ...form })
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

          console.log(res);
        });
    } catch (err) {
      console.error(err);
    }
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
              type="number"
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
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              value={form.dateVisit}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <legend>Commentaire</legend>
            <label>
              <textarea
                required
                name="comment"
                id="comment"
                type="text"
                value={form.comment}
                onChange={handleFormChange}
              ></textarea>
            </label>
          </div>
          <div className="">
            <label htmlFor="articlesNumber">
              Nombres d&apos;articles commandés
            </label>
            <input
              required
              name="articlesNumber"
              id="articlesNumber"
              type="number"
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
              type="number"
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
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
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
              type="number"
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
              type="number"
              value={form.salesFiguresForecast}
              onChange={handleFormChange}
            />
          </div>
        </article>
        <button type="submit" className="form-submit-btn">
          Envoyer le formulaire
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Formulaire;
