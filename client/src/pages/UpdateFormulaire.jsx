import axios from "axios";
import moment from "moment";
import "dotenv";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { notifySuccess } from "../utils/helper";

function UpdateFormulaire() {
  const [updateForm, setUpdateForm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findToReadFormulaire = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/formulaires/${id}`
        );
        setUpdateForm(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    findToReadFormulaire();
  }, []);

  if (!updateForm) {
    return <p>pas de formulaire !</p>;
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const updateContactForm = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`${import.meta.env.VITE_API_URL}/formulaires/${updateForm._id}`, {
          ...updateForm,
        })
        .then((res) => {
          notifySuccess("Formulaire envoyé");
          setUpdateForm({
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
      <form onSubmit={updateContactForm}>
        <article>
          <h2>Informations Client</h2>
          <div className="">
            <label htmlFor="nameClient">Nom </label>
            <input
              required
              name="nameClient"
              id="nameClient"
              type="text"
              value={updateForm.nameClient}
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
              value={updateForm.adressClient}
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
              value={updateForm.contractNumber}
              onChange={handleFormChange}
            />
          </div>
        </article>
        <article>
          <h2>Rendez vous client</h2>
          <h3>Date de visite </h3>
          <p>{new Date(updateForm.dateVisit).toLocaleDateString()}</p>
          <div>
            <legend>Commentaire</legend>
            <label>
              <textarea
                required
                name="comment"
                id="comment"
                type="text"
                value={updateForm.comment}
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
              value={updateForm.articlesNumber}
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
              value={updateForm.salesFigures}
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
              value={moment(updateForm.dateVisitForecast).format("yyyy-MM-DD")}
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
              value={updateForm.articlesNumberForecast}
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
              value={updateForm.salesFiguresForecast}
              onChange={handleFormChange}
            />
          </div>
        </article>
        <button type="submit" className="form-submit-btn">
          Modifier
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default UpdateFormulaire;
