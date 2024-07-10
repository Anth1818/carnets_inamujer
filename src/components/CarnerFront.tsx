interface ICarnetFrontProps {
    refFront: React.RefObject<HTMLDivElement>;
}



export function CarnetFront({ refFront }: ICarnetFrontProps) {
    return (
        <div id="frente" className="h-[720px] w-[550px] flex flex-col justify-start items-center mt-2  ">
            <h2 className="text-left font-bold ">Frente</h2>
            <div id="carnet-front" ref={refFront} className="min-h-[650px] min-w-[500px] border-2 box-border">
                <header className="h-[110px] w-full bg-custom-pattern bg-cover"></header>
                <div className="flex w-[400px] h-[250px] justify-around" >
                    <div className="mx-2 -mt-16 h-auto">
                        <img src="../../public/inamujer_logo.png" alt="logo inamujer" className="h-36 w-28 " />
                        <div className="flex flex-col justify-center items-start">
                            <p className="text-2xl font-bold">Anthony Jose</p>
                            <p className="text-2xl font-bold">Ruiz Caceres</p>
                            <p className="text-lg font-bold">27451286</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-around items-center h-[420px] z-10 ml-16">
                        <img src="../../public/avatar.png" alt="" className="h-24 w-24 rounded-full" />
                        <img src="../../public/bandera_logo.png" alt="" className="h-24 w-36 " />
                    </div>
                </div>
                <p className="text-center w-[400px] absolute -mt-[60px] text-lg ml-[30px] font-bold">Gerencia de Atención Integral y Prevención de la Violencia Contra la Mujer
                        </p>
                <footer >
                    <div className=" w-full h-[250px] bg-custom-pattern2 bg-cover relative -z-10"></div>
                    <div className="bg-purple-700 h-[50px] ">
                        <p className="text-center text-white p-3 font-bold">Directora</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}