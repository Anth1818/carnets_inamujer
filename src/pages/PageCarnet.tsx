import { useState } from "react";
import { CarnetInamujer } from "../components/CarnetInamujer";
import { Header } from "../components/Header";

const data_worker = [
  {
    id: 27451286,
    name: "Juan Perez",
    cargo: "Director",
    department: "Sistemas",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 27451287,
    name: "Maria Rodriguez",
    cargo: "Gerente",
    department: "Ventas",
    status: "Activo",
    gender: "Femenino",
  },
  {
    id: 27451288,
    name: "Pedro Martinez",
    cargo: "Analista",
    department: "Sistemas",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 27451289,
    name: "Raul Gonzalez",
    cargo: "Analista",
    department: "Gerencia de Atención Integral y Prevención de la Violencia Contra la Mujer",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 27451290,
    name: "Carol Smith",
    cargo: "Gerente",
    department: "Ventas",
    status: "Activo",
    gender: "Femenino",
  },
  {
    id: 12345678,
    name: "Jose Perez",
    cargo: "Analista",
    department: "OAC",
    status: "Activo",
    gender: "Masculino",
  },
  {
    id: 87654321,
    name: "Maria juana Rodriguez",
    cargo: "Analista",
    department: "Defensoria",
    status: "Activo",
    gender: "Femenino",
  }
];

export function PageCarnet() {
  const [department, setDepartment] = useState("Sistemas");
  const [search, setSearch] = useState("");

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

  const workers_filtered = data_worker.filter((worker) => {
    if (department) {
      return worker.department === department;
    }
    if (search) {
      return worker.id.toString().includes(search);
    }
  });

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center">Generador de carnet</h1>
      <p className="mx-4">Total de trabajadores: {data_worker.length}</p>
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
          className="p-2 mx-2 my-2 bg-blue-500 text-white rounded-lg"
          onClick={clearDepartment}
        >
          Buscar
        </button>
      </div>

      {workers_filtered.map((worker) => (
        <CarnetInamujer key={worker.id} worker={worker} />
      ))}
    </>
  );
}
