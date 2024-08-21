import { useEffect, useState } from "react";
import { CarnetInamujer } from "../components/CarnetInamujer";
import { Header } from "../components/Header";
import deparments from "../utils/deparments.ts";
import  useImageUploader  from "../hooks/useImageUploader";

const API = `http://172.30.60.24:3000/license`;

type dataWorkers = {
  id: number;
  full_name: string;
  position: string;
  department: string;
  status: string;
  identity_card: string; // Add the 'identity_card' property
};

export function PageCarnet() {
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
  // const [photoIds, setPhotoIds] = useState<string[]>([]);
  const [dataWorkers, setDataWorkers] = useState<dataWorkers[]>([]);
  const [errorRequest, setError] = useState<string | null>(null);
  const { imagePreviews, photoIds, handleImageSelection } = useImageUploader();

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
          setError("La API no está en línea o hay un problema de red");
        } else {
          setError(`Error: ${error.message}`);
        }
      });
  }, []);
  console.log(imagePreviews);

  // console.log(dataWorkers);
  // console.log(photoIds);

  // const handleFolderSelection = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const files = event.target.files ? Array.from(event.target.files) : [];
  //   const photos = files.filter((file) => file.type.includes("image"));
  //   const ids = files.map((file) => file.name.split(".")[0]); // Extrae el ID del nombre del archivo sin la extensión
  //   setPhotoIds(ids);
  //   localStorage.setItem("photoIds", JSON.stringify(ids));
  //   console.log(photos);
  // };

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

  console.log(noCoincidence);

  // console.log(comparedData);

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

  // console.log(workers_filtered);

  //   const photos = [
  //     "488692",
  //     "2553687",
  //     "3722524",
  //     "4114019",
  //     "4258844",
  //     "4420223",
  //     "4420808",
  //     "4588995",
  //     "4777778",
  //     "5003988",
  //     "5219303",
  //     "5331858",
  //     "5433995",
  //     "5598604",
  //     "5622149",
  //     "6029693",
  //     "6069245",
  //     "6100336",
  //     "6120850",
  //     "6156701",
  //     "6165647",
  //     "6168483",
  //     "6178168",
  //     "6211582",
  //     "6214882",
  //     "6295090",
  //     "6295186",
  //     "6308344",
  //     "6318298",
  //     "6334591",
  //     "6347132",
  //     "6368061",
  //     "6388657",
  //     "6434538",
  //     "6441209",
  //     "6451613",
  //     "6545788",
  //     "6624516",
  //     "6728158",
  //     "6792299",
  //     "6826547",
  //     "6862102",
  //     "6869466",
  //     "6896444",
  //     "6903623",
  //     "6940206",
  //     "6960143",
  //     "7918301",
  //     "7927106",
  //     "7949190",
  //     "8434318",
  //     "8470806",
  //     "8519706",
  //     "8640844",
  //     "8707336",
  //     "8773486",
  //     "8998174",
  //     "9294050",
  //     "9486407",
  //     "9954403",
  //     "10111595",
  //     "10115133",
  //     "10352442",
  //     "10377292",
  //     "10505126",
  //     "10532828",
  //     "10582186",
  //     "10626612",
  //     "10670417",
  //     "10780959",
  //     "10782748",
  //     "10793768",
  //     "10802257",
  //     "10810853",
  //     "10866905",
  //     "10871908",
  //     "10880954",
  //     "11084901",
  //     "11104826",
  //     "11158483",
  //     "11193273",
  //     "11195801",
  //     "11201427",
  //     "11225888",
  //     "11227963",
  //     "11268361",
  //     "11308138",
  //     "11414475",
  //     "11551912",
  //     "11630000",
  //     "11667441",
  //     "11691071",
  //     "11837817",
  //     "11874706",
  //     "12085441",
  //     "12094228",
  //     "12111435",
  //     "12304932",
  //     "12382237",
  //     "12641262",
  //     "12784550",
  //     "12785161",
  //     "12826468",
  //     "12912412",
  //     "12916959",
  //     "13139759",
  //     "13316430",
  //     "13515568",
  //     "13526773",
  //     "13528275",
  //     "13534418",
  //     "13553251",
  //     "13585702",
  //     "13749613",
  //     "13786032",
  //     "14445024",
  //     "14527140",
  //     "14585122",
  //     "14591065",
  //     "14821212",
  //     "14861665",
  //     "14990975",
  //     "15021539",
  //     "15113071",
  //     "15147041",
  //     "15207047",
  //     "15314170",
  //     "15378179",
  //     "15395130",
  //     "15589183",
  //     "15805664",
  //     "15837975",
  //     "15966601",
  //     "16134955",
  //     "16290010",
  //     "16564645",
  //     "17687839",
  //     "17973920",
  //     "18275588",
  //     "18330328",
  //     "18937558",
  //     "19711922",
  //     "20301698",
  //     "20632959",
  //     "21343142",
  //     "21724452",
  //     "22032225",
  //     "22037663",
  //     "22751688",
  //     "22904551",
  //     "23174382",
  //     "24218476",
  //     "24760879",
  //     "25561271",
  //     "26045491",
  //     "27254566",
  //     "27451286",
  //     "27606920",
  //     "28405523",
  //     "28441416",
  //     "28706969",
  //     "82044048",
  //     "83530052",
  //     "IMG_7764"
  // ]

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center">Generador de carnet</h1>
      <details>
        <summary>Trabajadores sin coincidencia</summary>
        <ul>
          {noCoincidence.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </details>
      <p className="mx-4">Total de trabajadores coincidentes con imagen: {comparedData.length}</p>

      <div className="flex">
        <input type="file" multiple onChange={handleImageSelection} />
        <select
          className="p-2 mx-4 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[220px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={department}
          onChange={handleDepartment}
        >
          {!department && <option value="">Seleccionar departamento</option>}
          {deparments.map((department) => (
            <option key={department} value={department}>
              {department} 
            </option>))}
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
        <CarnetInamujer
          key={worker.id}
          worker={{ ...worker, identity_card: parseInt(worker.identity_card)}}
          imagePreviews={imagePreviews}
          
        />
      ))}
      {}
      {workers_filtered.length === 0 && (
        <p className="text-center">No se encontro el trabajador</p>
      )}
    </>
  );
}
