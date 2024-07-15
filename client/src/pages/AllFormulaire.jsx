import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { CiRead } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function AllFormulaire() {
  const { allFormulaire } = useOutletContext();

  console.log(allFormulaire);

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
                  <NavLink to={`/read-formulaire/${formulaire._id}`}>
                    <CiRead />
                  </NavLink>
                </button>
              </td>
              <td>
                <FaPen />
              </td>
              <td>
                <button>
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
