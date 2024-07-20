import axios from "axios";

import { NavLink, useOutletContext } from "react-router-dom";

import { CiRead } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function AllFormulaire() {
  const { allFormulaire } = useOutletContext();

  const deleteContactForm = async (id) => {
    try {
      await axios
        .delete(`${import.meta.env.VITE_API_URL}/formulaires/${id}`)
        .then((res) => {
          console.log(res);
        });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>N° Contrat</th>
          <th>Date de visite</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {allFormulaire.length > 0 ? (
          allFormulaire.map((formulaire) => (
            <tr key={formulaire._id}>
              <td>{formulaire.nameClient}</td>
              <td>{formulaire.contractNumber}</td>
              <td>{formulaire.dateVisit}</td>
              <td>
                <button>
                  <NavLink to={`/formulaire/${formulaire._id}/read`}>
                    <CiRead />
                  </NavLink>
                </button>
              </td>
              <td>
                <NavLink to={`/formulaire/${formulaire._id}/update`}>
                  <FaPen />
                </NavLink>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteContactForm(formulaire._id);
                  }}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Aucun formulaire disponible</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default AllFormulaire;
