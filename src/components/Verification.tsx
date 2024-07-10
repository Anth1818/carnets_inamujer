interface IVerificationProps {
    id: string;
}



export function Verification({ id }: IVerificationProps) {
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-center mt-10 text-4xl">Verificado</h1>
        <img src="../../public/verificado.webp" className="w-14 h-14"></img>
      </div>
      <main className="flex w-full justify-center items-cente">
        <div
          className="w-[800px] rounded-lg border bg-gray-800 text-card-foreground shadow-sm mb-4 mt-4 "
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.0 p-6 justify-center items-center text-white">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Información del Trabajador
            </h3>
            <h6>Fecha: {date}</h6>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-500 font-medium">Cédula:</p>
                <p className="text-white">{id}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Nombre:</p>
                <p className="text-white">John Doe</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Departamento:</p>
                <p className="text-white">Ventas</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Cargo:</p>
                <p className="text-white">Gerente</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Estatus:</p>
                <p className="text-white">Activo</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
