import axios from "axios";
import "dotenv";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ReadFormulaire() {
  const [readFormulaire, setReadFormulaire] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findToReadFormulaire = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/formulaires/${id}`
        );
        setReadFormulaire(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    findToReadFormulaire();
  }, []);

  if (!readFormulaire) {
    return <p>pas de formulaire !</p>;
  }

  return (
    <section>
      <article key={readFormulaire._id}>
        <h2>Informations Client</h2>

        <h3>Nom </h3>
        <p>{readFormulaire.nameClient}</p>

        <h3>Adresse </h3>
        <p>{readFormulaire.adressClient}</p>

        <h3>N° Contrat</h3>
        <p>{readFormulaire.contractNumber}</p>
      </article>

      <article>
        <h2>Rendez vous client</h2>

        <h3>Date de visite </h3>
        <p>{new Date(readFormulaire.dateVisit).toLocaleDateString()}</p>

        <h3>Commentaire</h3>
        <p>{readFormulaire.comment}</p>

        <h3>Nombres d&apos;articles </h3>
        <p>{readFormulaire.articlesNumber}</p>

        <h3>Chiffre d&apos;affaire de la vente</h3>
        <p>{readFormulaire.salesFigures}</p>
      </article>

      <article>
        <h2>Prochain rendez vous</h2>

        <h3>Date de visite prévisionnelle</h3>
        <p>{new Date(readFormulaire.dateVisitForecast).toLocaleDateString()}</p>

        <h3>Nombres d&apos;articles prévisionnels</h3>
        <p>{readFormulaire.articlesNumberForecast}</p>

        <h3>Chiffre d&apos;affaire prévisionnel de la vente</h3>
        <p>{readFormulaire.salesFiguresForecast}</p>
      </article>
    </section>
  );
}

export default ReadFormulaire;
