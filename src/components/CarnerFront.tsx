interface ICarnetFrontProps {
    refFront: React.RefObject<HTMLDivElement>;
    worker_name: string;
    worker_id: number;
    worker_cargo: string;
    worker_gender: string;
    worker_department: string;
}


export function CarnetFront({ refFront, worker_name, worker_cargo, worker_id, worker_gender, worker_department}: ICarnetFrontProps) {
    // const avatar = worker_gender === "Masculunio" ? "../../public/avatar.png" : "../../public/avatar-female.png";

    const imgUrl =`../../src/assets/photos/${worker_id}.jpg` ;
    
    return (
        <div id="frente" className="h-[720px] w-[550px] flex flex-col justify-start items-center mt-2  ">
            <h2 className="text-left font-bold ">Frente</h2>
            <div id="carnet-front" ref={refFront} className="min-h-[650px] min-w-[350px] relative md:w-[400px] border-2 box-border">
                <header className="h-[110px] w-full bg-custom-pattern bg-repeat-round"></header>
                <div className="flex h-[250px] justify-around bg-white" >
                    <div className="mx-2 -mt-16 h-auto">
                        <img src="../../public/inamujer_logo.png" alt="logo inamujer" className="h-36 w-28 " />
                        <div className="flex flex-col justify-center items-start">
                            <p className="text-base font-bold ">{worker_name}</p>
                            <p className="text-md font-bold">{worker_id}</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-around items-center h-[420px] z-10 ml-16">
                        <img src={imgUrl} alt="foto de trabajador" className="h-28 w-28 rounded-full" />
                        <img src="../../public/bandera_logo.png" alt="" className="h-24 w-36 " />
                    </div>
                </div>
                <p className="text-center w-[300px] absolute -mt-[60px] text-lg ml-[40px] font-bold leading-tight">{worker_department}
                        </p>
                <footer >
                    <div className=" w-full h-[250px] bg-custom-pattern2 bg-cover relative -z-10 border-none"></div>
                    <div className="bg-purple-700 h-[40px] ">
                        <p className="text-center text-white p-2 font-bold">{worker_cargo}</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}