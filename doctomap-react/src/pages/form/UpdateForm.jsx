import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // Supposons que l'ID du docteur est passé dans l'URL
  const [doctor, setDoctor] = useState({
    firstname: "",
    lastname: "",
    speciality: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    // Charger les données du docteur existant
    const fetchDoctor = async () => {
      try {
        const response = await fetch(
          `https://127.0.0.1:8000/api/doctors/${id}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données du docteur");
        }
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://127.0.0.1:8000/api/doctors/${id}`, {
        method: "PATCH", // ou "PATCH" selon votre API
        headers: {
          "Content-Type": "application/merge-patch+json",
          Accept: "application/ld+json",
        },
        body: JSON.stringify(doctor),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du docteur");
      }

      await response.json();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id="doctorUpdateForm"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 m-4"
    >
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={doctor.firstname}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstname"
          type="text"
          placeholder="Prénom"
        />
      </div>
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={doctor.lastname}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastname"
          type="text"
          placeholder="Nom"
        />
      </div>
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={doctor.speciality}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="speciality"
          type="text"
          placeholder="Spécialité"
        />
      </div>
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={doctor.address}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="Adresse"
        />
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="md:w-1/2 md:mr-2 mb-4 md:mb-0">
          <input
            onChange={handleChange}
            value={doctor.city}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Ville"
          />
        </div>
        <div className="md:w-1/2 md:ml-2">
          <input
            onChange={handleChange}
            value={doctor.zip}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            placeholder="Code postal"
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={doctor.phone}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="Téléphone"
        />
      </div>
      <div className="mb-4">
        <input
          onChange={handleChange}
          value={doctor.image}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image"
          type="text"
          placeholder="lien de l'image"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-black cursor-pointer hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Mettre à jour
        </button>
      </div>
    </form>
  );
}

export default UpdateForm;
