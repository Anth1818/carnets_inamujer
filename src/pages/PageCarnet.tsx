import { useEffect, useState } from "react";
import { CarnetInamujer } from "../components/CarnetInamujer";
import { Header } from "../components/Header";
// import deparments from "../utils/deparments.ts";
import useImageUploader from "../hooks/useImageUploader";

const API = `http://172.30.60.24:3000/license` || `http://localhost:3000/license`;

type dataWorkers = {
  id: number;
  // full_name: string;
  names: string;
  last_names: string;
  position: string;
  department: string;
  status: string;
  identity_card: string; // Add the 'identity_card' property
};

export function PageCarnet() {

  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [dataWorkers, setDataWorkers] = useState<dataWorkers[]>([]);
  const [errorRequest, setErrorRequest] = useState<string | null>(null);
  const { imagePreviews, photoIds, handleImageSelection } = useImageUploader();


  useEffect(() => {
    if (!search) localStorage.removeItem("photoIds");
  }, [search]);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        setDataWorkers(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error instanceof TypeError) {
          setErrorRequest("La API no está en línea o hay un problema de red");
        } else {
          setErrorRequest(`Error: ${error.message}`);
        }
      });
  }, []);
  // console.log(imagePreviews);

  const photoIdsFromLocalStorage = localStorage.getItem("photoIds");

  const comparedData = dataWorkers?.filter(
    (Worker) =>
      photoIds.includes(Worker.identity_card.toString()) ||
      photoIdsFromLocalStorage?.includes(Worker.identity_card.toString())
  );

  const workerIds = comparedData.map((worker) =>
    worker.identity_card.toString()
  );

  const noCoincidence = photoIds.filter((id) => !workerIds.includes(id));

  const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value);
    setSearch("");
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearDepartment = () => {
    setDepartment("");
  };

  const workers_filtered = comparedData.filter((worker) => {
    if (department) {
      return worker.department === department;
    }
    if (search) {
      return worker.identity_card.toString().includes(search);
    } else {
      return null;
    }
  });

  const departmentsFinded = Array.from(new Set(comparedData.map((worker) => worker.department)));

  const notAllowed = comparedData.length === 0 ? 'cursor-not-allowed' : '';

  return (
    <>
      <Header />
      <h1 className="text-5xl font-bold text-center mb-6 font-roboto">Generador de carnet</h1>

      {noCoincidence.length > 0 && (
        <details className="mb-4 ml-4">
          <summary className="cursor-pointer text-lg font-semibold">Trabajadores sin coincidencia</summary>
          <ul className="list-disc list-inside ml-4 mt-2">
            {noCoincidence.map((id) => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </details>
      )}

      <p className="mx-4 mb-4">Total de trabajadores coincidentes con imagen: {comparedData.length}</p>

      <div className="flex flex-col items-start ml-4">
        <input
          type="file"
          id="upload-photos"
          multiple
          onChange={handleImageSelection}
          className="hidden"
        />
        <label
          htmlFor="upload-photos"
          className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Cargar fotos de trabajadores
        </label>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <select
          className={`p-2 mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-3/4 md:w-1/4 ${notAllowed}`}
          value={department}
          onChange={handleDepartment}
          disabled={comparedData.length === 0}
        >
          {!department && <option value="">Seleccionar departamento</option>}
          {departmentsFinded?.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Buscar trabajador"
          disabled={comparedData.length === 0}
          className={`p-2 mx-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-3/4 md:w-1/4 ${notAllowed}`}
          value={search}
          onChange={(e) => handleChanges(e)}
          onKeyDown={(e) => e.key === "Enter" && clearDepartment()}
        />
        <button
          className={`p-2 mx-2 my-2 bg-blue-500 text-white rounded-lg w-24 pointer-events-auto ${notAllowed}`}
          onClick={clearDepartment}
          disabled={comparedData.length === 0}
        >
          Buscar
        </button>
      </div>

      {workers_filtered.map((worker) => (
        <CarnetInamujer
          key={worker.id}
          worker={{ ...worker, identity_card: parseInt(worker.identity_card) }}
          imagePreviews={imagePreviews}

        />
      ))}
      {workers_filtered.length === 0 && (
        <p className="text-center">No se encontro el trabajador</p>
      )}
    </>
  );
}
