import { CarnetFront } from "./CarnerFront";
import { CarnetBack } from "./CarnetBack";

export function CarnetInamujer() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <h2>Vista previa (Carnet del trabajador 27451286)</h2>
      <section id="carnet-container" className=" w-[1000px]  flex">
        <CarnetFront />
        <CarnetBack />

      </section>
    </main>

  )
}