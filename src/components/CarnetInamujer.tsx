import { CarnetFront } from "./CarnerFront";
import { CarnetBack } from "./CarnetBack";
import { useRef } from "react";
import { exportComponentAsJPEG } from 'react-component-export-image';

export function CarnetInamujer() {
  const refCarnetFront = useRef<HTMLDivElement>(null);
  const refCarnetBack = useRef<HTMLDivElement>(null);

  const handleDownloadFront = () => {
    exportComponentAsJPEG(refCarnetFront, {fileName: 'carnet-frente-27451286'});
  }
  const handleDownloadBack = () => {
    exportComponentAsJPEG(refCarnetBack, {fileName: 'carnet-reverso-27451286'});
  }

  return (
    <main className="flex flex-col flex-wrap justify-center items-center mt-6 ">
      <h2>Vista previa (Carnet del trabajador 27451286)</h2>
      <section id="carnet-container" className=" w-[1300px] flex justify-evenly flex-wrap">
        <CarnetFront refFront={refCarnetFront} />
        <CarnetBack refBack={refCarnetBack} />
      </section>
      <div className="flex gap-4">
      <button onClick={handleDownloadFront} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Descargar frente en jpg
      </button>
      <button onClick={handleDownloadBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Descargar reverso en jpg
      </button>
      </div>
      
    </main>

  )
}