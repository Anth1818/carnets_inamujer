import { QRCodeSVG } from 'qrcode.react';

interface ICarnetFrontProps {
  refBack: React.RefObject<HTMLDivElement>;
}



export function CarnetBack({refBack}: ICarnetFrontProps) {
  return (
    <div  id="reverso" className="h-[650px] w-[500px] flex flex-col justify-start items-center mt-2 ">
      <h2 className="text-left font-bold "  >Reverso</h2>
      <div  ref={refBack} id="carnet-back"  className="min-h-[620px] w-[400px] border-2 box-border">
        <header className="h-[110px] w-full bg-custom-pattern bg-cover"></header>
        <div className="mx-2 -mt-16 box-border">
          <img src="../../public/escudo_logo.png" alt="escudo de venezuela" className="h-36 w- rounded-full" />
        </div>
        <div className="w-[240px] h-[200px] -mt-20 text-[14px] ml-[150px]">
          <p>Este documento acredita al titular como funcionario o funcionaria adscrito(a) al Instituto Nacional de la Mujer, entidad dependiente del Ministerio del Poder Popular para la Mujer y la Igualdad de Género.</p>
          <p className='z-10'>Se agradece a las autoridades civiles y militares por prestar toda la colaboración necesaria para garantizar el normal desenvolvimiento de sus labores a la portadora o portador de este carnet.</p>
          <p className="mt-7 z-10"> Firma autorizada</p>
          <div>
            <img src="../../public/sello.png" className="h-20 w-20 ml-[150px] rounded-full z-10" />
          </div>
        </div>
        <div className='absolute mt-[170px] ml-[160px]'>
        <QRCodeSVG
          value={"http://www.inamujer.gob.ve"}
          size={80}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
        />
        </div>
        
        <footer>
          <div className="h-[250px] w-full bg-custom-pattern2 bg-cover relative -z-10"></div>
          <div className="h-[30px] bg-custom-pattern3 bg-cover mt-3" >

          </div>
        </footer>

      </div>
    </div>
  )
}