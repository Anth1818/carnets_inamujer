export function CarnetBack () {
    return (
        <div id="reverso" className="h-[750px] w-[500px] flex flex-col justify-start items-center mt-2 ">
          <h2 className="text-left font-bold ">Reverso</h2>
          <div className="min-h-[620px] w-[400px] border-2">
            <header className="h-[110px] w-full bg-custom-pattern bg-cover"></header>
            <div className="mx-2 -mt-16">
              <img src="../../public/escudo_logo.png" alt="escudo de venezuela" className="h-36 w- rounded-full" />
            </div>
            <div className="w-[240px] h-[200px] -mt-20 text-[14px] ml-[150px]">
              <p>Este documento acredita al titular como funcionaria(o) adscrita(o) al Instituto Nacional de la Mujer, ente adscrito al Ministerio del Poder Popular para la Mujer y la Igualdad de Género.</p>
              <p>Se les agradece a las autoridades civiles y militares prestar toda la colaboración para garantizar el normal desenvolvimiento de sus labores a la(el) portadora (or) de este carnet.</p>
              <p className="mt-7"> Firma autorizada</p>
              <div>
                <img src="../../public/sello.png" className="h-20 w-20 ml-[150px] rounded-full" />
              </div>
            </div>


            <footer>
              <div className="h-[250px] w-full bg-custom-pattern2 bg-cover"></div>
              <div className="h-[30px] bg-custom-pattern3 bg-cover mt-3" >
            
              </div>
            </footer>

          </div>
        </div>
    )}