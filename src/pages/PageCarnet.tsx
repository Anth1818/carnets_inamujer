import { useState } from "react";
import { CarnetInamujer } from "../components/CarnetInamujer";
import { Header } from "../components/Header";

const data_worker = [
  {
    id: 27451286,
    names: "Juan Jose ",
    lastNames: "Perez Gimenez",
    cargo: "Director",
    department: "Sistemas",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 27451287,
    names: "Maria Laura ",
    lastNames: "Rodriguez Perez",
    cargo: "Gerente",
    department: "Ventas",
    status: "Activo",
    gender: "Femenino",
  },
  {
    id: 4114019,
    names: "Pedro Alberto ",
    lastNames: "Martinez Castillo",
    cargo: "Analista",
    department: "Sistemas",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 10505126,
    names: "Raul Alejandro ",
    lastNames: "Gonzalez Blanco",
    cargo: "Analista",
    department: "Gerencia de Atención Integral y Prevención de la Violencia Contra la Mujer",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 27451290,
    names: "Carol Jesica ",
    lastNames: "Smith Perez",
    cargo: "Gerente",
    department: "Ventas",
    status: "Activo",
    gender: "Femenino",
  },
  {
    id: 12345678,
    names: "Jose Gregorio ",
    lastNames: "Perez Oropeza",
    cargo: "Analista",
    department: "OAC",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 14861665,
    names: "Maria Juana ",
    lastNames: "Rodriguez Velasquez",
    cargo: "Analista",
    department: "Defensoria",
    status: "Activo",
    gender: "Femenino",
  }
];




export function PageCarnet() {
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  const [photoIds, setPhotoIds] = useState<string[]>([]);
  

  console.log(photoIds);

  const handleFolderSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const ids = files.map(file => file.name.split('.')[0]); // Extrae el ID del nombre del archivo sin la extensión
    setPhotoIds(ids);
    localStorage.setItem('photoIds', JSON.stringify(ids));
  };

  const photoIdsFromLocalStorage = localStorage.getItem('photoIds');

  const comparedData =  data_worker.filter(worker => photoIds.includes(worker.id.toString()) || photoIdsFromLocalStorage?.includes(worker.id.toString()));


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
      return worker.id.toString().includes(search);
    } else {
      return null;
    }

  });

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center">Generador de carnet</h1>
      {/* <p className="mx-4">Total de trabajadores: {data_worker.length}</p> */}

      <div className="flex">
      <input 
        type="file" 
        multiple 
        onChange={handleFolderSelection} 
      />
        <select
          className="p-2 mx-4 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[220px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={department}
          onChange={handleDepartment}
        >
          {!department && <option value="">Seleccionar departamento</option>}
          <option value="Sistemas">Sistemas</option>
          <option value="Ventas">Ventas</option>
          <option value="Defensoria">Defensoria</option>
          <option value="OAC">OAC</option>
          <option value="Gerencia de Atención Integral y Prevención de la Violencia Contra la Mujer">Prevención</option>
        </select>
        <div className="flex">
          <input
            type="text"
            placeholder="Buscar trabajador"
            className="p-2 mx-4 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[220px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={search}
            onChange={(e) => handleChanges(e)}
            onKeyDown={(e) => e.key === "Enter" && clearDepartment()}
          />
          <button
            className="p-2 mx-2 my-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={clearDepartment}
          >
            Buscar
          </button>
        </div>
      </div>
      {workers_filtered.map((worker) => (
        <CarnetInamujer key={worker.id} worker={worker} />
      ))}
      {workers_filtered.length === 0 && (
        <p className="text-center">No se encontro el trabajador</p>
      )}
    </>
  );
}
