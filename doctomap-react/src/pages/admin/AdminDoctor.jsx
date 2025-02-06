import DashbordMenu from "../components/nav/dashboard/DashbordMenu";
import { useEffect, useState } from "react";

function AdminDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    const response = await fetch("https://127.0.0.1:8000/api/doctors");
    const data = await response.json();
    console.log("data");
    console.log(data.member);
    setDoctors(data.member);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://127.0.0.1:8000/api/doctors/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      getDoctors();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la suppression :",
        error
      );
    }
  };

  return (
    <div>
      <div className="left-0 fixed top-0">
        <DashbordMenu />
      </div>
      <div className="w-[78%] float-end">
        <div className="p-5 flex gap-5 flex-col w-[100%]">
          {doctors.map((doctor) => {
            return (
              <div
                to={`${doctor.id}`}
                key={doctor.id}
                className="flex flex-row align-middle justify-items-center justify-baseline hover:scale-[101%] transition mb-2 shadow-xl border border-gray-200 bg-white p-4 rounded-lg max-w-full h-min"
              >
                <img src={`${doctor.image}`} className="w-16" alt="" />
                <div className="flex flex-col align-middle justify-center m-5 w-full h-full">
                  <p>
                    #{doctor.id} {doctor.firstname} {doctor.lastname},{" "}
                    {doctor.speciality}, {doctor.city}
                  </p>
                </div>
                <p
                  onClick={() => handleDelete(doctor.id)}
                  className="bg-red-700 cursor-pointer text-white rounded-2xl m-1 p-2 text-center hover:scale-[105%]"
                >
                  supprimer
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminDoctor;
