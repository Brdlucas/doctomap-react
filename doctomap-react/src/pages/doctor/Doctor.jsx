import { useEffect, useState } from "react";
import { Link } from "react-router";

function Doctor() {
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

  return (
    <div>
      <div className="p-5 flex gap-5 flex-col">
        {doctors.map((doctor) => {
          return (
            <Link
              to={`${doctor.id}`}
              key={doctor.id}
              className="hover:scale-[101%] transition mb-2 shadow-xl border border-gray-200 bg-white p-4 rounded-lg max-w-full h-min"
            >
              <div className="mx-auto">
                <div className="card md:flex max-w-lg">
                  <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
                    <img
                      className="object-cover rounded-full"
                      src={doctor.image}
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <p className="font-bold">Docteur(e)</p>
                    <h3 className="text-xl heading">
                      {doctor.firstname} {doctor.lastname}
                    </h3>
                    <p className="mt-2 mb-3">
                      Docteur(e) {doctor.lastnam} est un(e) {doctor.speciality}.
                    </p>
                    <div className="flex flex-row gap-x-3">
                      <span className="bg-purple-700 text-white px-3 py-1.5 rounded-lg text-sm">
                        {doctor.speciality}
                      </span>
                      <span className="bg-purple-700 text-white border px-3 py-1.5 rounded-lg text-sm">
                        {doctor.city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Doctor;
