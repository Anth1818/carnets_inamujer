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
      department: "Sistemas",
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
  ];
  

export function PageCarnet() {
    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold text-center">Generador de carnet</h1>
            <p>Total de trabajadores: 200</p>
            {data_worker.map((worker) => (
                <CarnetInamujer key={worker.id} worker={worker} />
            ))}
        </>

    )
}