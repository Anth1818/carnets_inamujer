interface IVerificationProps {
    id: string | undefined;
}


export function NotVerification({ id }: IVerificationProps) {
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-center mt-10 text-4xl">No Verificado</h1>
        <img src="../../public/no-verificado.webp" className="w-24 h-14"></img>
      </div>
      <main className="flex w-full justify-center items-cente">
        <div
          className="w-[800px] rounded-lg border bg-gray-800 text-card-foreground shadow-sm mb-4 mt-4 "
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.0 p-6 justify-center items-center text-white">
            <h6>Fecha: {date}</h6>
          </div>
          <div className="p-6">
            <h2 className="text-center text-white text-2xl">
              {`No se encontro el trabajador con la cédula ${id} en el sistema`}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
