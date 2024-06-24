export function NotVerification(){
    const date = new Date().toLocaleDateString();
    return(
        <div>
           <h1 className="text-center mt-10 text-4xl">Verificación</h1>
            <main className="flex w-full justify-center items-cente">
                <div
                    className="w-[800px] rounded-lg border bg-gray-800 text-card-foreground shadow-sm mb-4 mt-8 "
                    data-v0-t="card"
                >
                    <div className="flex flex-col space-y-1.0 p-6 justify-center items-center text-white">
                        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                            Información del Trabajador
                        </h3>
                        <h6>Fecha: {date}</h6>
                    </div>
                    <div className="p-6">
                        <h2 className="text-center text-white text-2xl">No se encontro ese trabajador en el sistema</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}