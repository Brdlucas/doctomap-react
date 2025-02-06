import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

function Id() {
  const params = useParams();
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    getOneDoctor();
  }, [params.id]);

  const getOneDoctor = async () => {
    const response = await fetch(
      `https://127.0.0.1:8000/api/doctors/${params.id}`
    );
    const data = await response.json();
    setDoctor(data);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={`${doctor.image}`}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 className="text-xl font-bold">
                  {doctor.firstname} {doctor.lastname}
                </h1>
                <p className="text-gray-700">{doctor.speciality}</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    {doctor.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">A propos</h2>
              <p className="text-gray-700">
                le cabinet du docteur(e) {doctor.lastname} est un cabinet de{" "}
                {doctor.speciality} situé a {doctor.city}, dans le {doctor.zip}.
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">Adresse</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    {doctor.address} {doctor.city}, {doctor.zip}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
