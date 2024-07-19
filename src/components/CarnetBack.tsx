import { QRCodeSVG } from "qrcode.react";

interface ICarnetFrontProps {
  refBack: React.RefObject<HTMLDivElement>;
  worker_id: number;
}

export function CarnetBack({ refBack, worker_id }: ICarnetFrontProps) {
  return (
    <div
      id="reverso"
      className="h-[720px] w-[550px] flex flex-col justify-start items-center mt-2 "
    >
      <h2 className="text-left font-bold ">Reverso</h2>
      <div
        ref={refBack}
        id="carnet-back"
        className="min-h-[650px] min-w-[350px] md:w-[400px] relative border-2 box-border bg-white"
      >
        <header className="h-[110px] w-full bg-custom-pattern bg-repeat-round"></header>
        <div className="mx-2 -mt-11 box-border">
          <img
            src="../../public/escudo_logo.png"
            alt="escudo de venezuela"
            className="h-20 rounded-full"
          />
        </div>
        <div className="w-[300px] h-[250px] -mt-20 text-[15px] ml-[80px] text-justify bg-white">
          <p className="mt-12 leading-tight">
            Este documento acredita al titular como funcionaria(o) adscrita(o)
            al Instituto Nacional de la Mujer, ente adscrito al Ministerio del
            Poder Popular para la Mujer y la Igualdad de Género.
          </p>
          <p className="z-10 mt-2 -ml-[60px] leading-tight">
            Se les agradece a las autoridades civiles y militares prestar toda
            la colaboración para garantizar el normal desenvolvimiento de sus
            labores a la(el) portadora (or) de este carnet.
          </p>
          <div className="mt-3">
            <img
              src="../../public/sello.png"
              className="h-24 w-24 ml-[210px] rounded-full z-10"
            />
          </div>
          <p className="-mt-8 ml-20 z-10"> Firma autorizada</p>
        </div>

        <div className=" text-[11px] absolute text-center leading-tight">
          <p className="w-[250px] mt-20 ml-36">
            En caso de extravió, favor remitir a: Av. Oeste3, Torre Bandagro,
            Piso 2, Altagracia, 1010, Caracas, Distrito Capital, Venezuela.
            Instituto Nacional de la Mujer, INAMUJER. <br /> Email:
            despachoinamujeroficial@Gmail.com <br /> Telf: (xxxx)-(XX XX XX)
          </p>
        </div>

        <div className="absolute mt-[170px]">
          <QRCodeSVG
            value={`http://localhost:5175/carnet/verification/${worker_id}`}
            size={80}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
          />
        </div>

        <div className="h-[250px] w-full bg-custom-pattern2 bg-cover border-none"></div>
        <footer className=" bg-white">
          <div className=" h-[27px] bg-custom-pattern3 mt-1 bg-cover "></div>
        </footer>
      </div>
    </div>
  );
}
