import { CarnetFront } from "./CarnerFront";
import { CarnetBack } from "./CarnetBack";
import { useRef } from "react";
// import { exportComponentAsPNG } from 'react-component-export-image';
import { toPng } from 'html-to-image';


interface ICarnetInamujerProps {
  worker: {
    id: number;
    full_name: string;
    position: string;
    department: string;
    status: string;
    identity_card: number;
  }
  imagePreviews: { [key: string]: string };

}

export function CarnetInamujer({worker, imagePreviews}: ICarnetInamujerProps) {
  const refCarnetFront = useRef<HTMLDivElement>(null);
  const refCarnetBack = useRef<HTMLDivElement>(null);

  const donwload = async () => {
    await handleDownloadFront();
    await handleDownloadBack();
  }

  const handleDownloadFront = () => {
    if (refCarnetFront.current) {
      toPng(refCarnetFront.current, { cacheBust: false })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `carnet-front-${worker.identity_card}`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDownloadBack = () => {
    if (refCarnetBack.current) {
      toPng(refCarnetBack.current, { cacheBust: false })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `carnet-back-${worker.identity_card}`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <main className="flex flex-col items-center ">
      <h2 className="mt-6 font-bold">Vista previa (Carnet del trabajador {worker.identity_card})</h2>
      <section id="carnet-container" className=" sm:w-[800px] md:w-[1500px] md:flex justify-center">
        <CarnetFront refFront={refCarnetFront} worker_fullName={worker.full_name} worker_id={worker.identity_card} worker_cargo={worker.position} worker_department={worker.department} imagePreviews={imagePreviews}/>
        <CarnetBack refBack={refCarnetBack} worker_id={worker.identity_card}/>
      </section>
      <div className="flex gap-4">
        <button onClick={donwload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          descargar ambos en png
          </button>
      {/* <button onClick={handleDownloadFront} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Descargar frente en png
      </button>
      <button onClick={handleDownloadBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Descargar reverso en png
      </button> */}
      </div>
    </main>
    

  )
}