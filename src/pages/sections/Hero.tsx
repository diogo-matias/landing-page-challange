import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

export default function Hero() {
  function renderDivider() {
    return <div className="w-full h-[1.5px] bg-light-gray" />;
  }

  function renderHeader() {
    const options = ["Home", "Quem somos", "Serviços", "Contato"];
    const selected = "Home";

    return (
      <header className="my-7 w-full ">
        <nav className="flex justify-between sm:items-center gap-1.5">
          <Image
            className="cursor-pointer"
            alt="logo"
            src={"/images/logo.png"}
            width={150}
            height={40}
          />
          <ul className="sm:flex items-center hidden">
            {options.map((option) => {
              const isSelected = option === selected;
              const customStyle = isSelected ? "font-bold" : "";

              return (
                <li className={`${customStyle} p-3 text-nowrap cursor-pointer`}>
                  {option}
                </li>
              );
            })}
          </ul>
          <div className="flex sm:hidden mr-3">
            <FontAwesomeIcon
              fontSize={24}
              icon={faBars}
              className="cursor-pointer"
            />
          </div>
        </nav>
      </header>
    );
  }

  function renderNumbersInfos(number: number, label: string) {
    return (
      <div className="pr-4">
        <span className="text-3xl sm:text-[44px] font-medium tracking-tight">
          {number}
        </span>
        <br />
        <span className="text-neutral text-sm sm:text-normal tracking-tight">
          {label}
        </span>
      </div>
    );
  }

  function renderBottomInfo() {
    return (
      <div className="grid grid-cols-3 gap-6 mt-10 sm:divide-x sm:divide-light-gray px-5 lg:px-0">
        {renderNumbersInfos(509, "Vistos tirados")}
        {renderNumbersInfos(602, "Passaportes Tirados")}
        {renderNumbersInfos(634, "Famílias Felizes")}
      </div>
    );
  }

  function renderMainInfo() {
    return (
      <div className="mt-14 flex lg:flex-row flex-col items-center lg:items-end gap-4">
        <div className="w-[80%] md:w-[50%] flex flex-col lg:items-start items-center">
          <p className="text-neutral text-center lg:text-start tracking-tight">
            Com uma equipe altamente treinada, nós temos todos os procedimentos
            para que seu processo seja o mais tranquilo e rápido. Uma
            consultoria completa para você e sua família não ter nenhuma
            preocupação na sua viagem.
          </p>
          <div>
            <Button className="mt-10">{"Saiba mais ->"}</Button>
          </div>
        </div>
        <div className="w-[70%] md:w-[50%] lg:w-[30%] flex items-end">
          <div className="flex flex-col ">
            <Image
              alt="hero"
              src={"/images/thumb.png"}
              height={800}
              width={800}
              objectFit="contain"
            ></Image>
            <div className="flex justify-between mt-3">
              <div>
                <p className="font-semibold">Conheça a bruna</p>
                <span className="text-neutral text-sm">ver video</span>
              </div>
              <Button className="p-0 h-14 w-14">{"->"}</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderInfo() {
    return (
      <div className="w-full lg:w-[40%] flex flex-col items-center">
        {renderHeader()}
        <h1 className="sm:text-[54px] text-5xl text-center lg:text-left mb-8 font-medium tracking-[-0.05em]">
          Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
        </h1>
        {renderDivider()}
        {renderMainInfo()}
        <div>{renderBottomInfo()}</div>
      </div>
    );
  }

  function renderBanner() {
    return (
      <div className="mt-5 flex-1 max-h-[100vh] flex items-center justify-end">
        <div className="relative">
          <Button variant="secondary" className="absolute right-4 top-4">
            Tirar meu visto agora!
          </Button>
          <div
            className="absolute bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]  right-0 left-0 bottom-0 z-10
          flex items-end pt-10 px-5 pb-5 sm:pt-20 sm:px-16 sm:pb-15 rounded-3xl max-h-[500px]
          "
          >
            <div className="flex flex-col">
              <h2 className="text-white w-[90%] mb-2 text-3xl sm:text-[44px] font-semibold ">
                Realize o seu sonho com <br /> a ajuda da Tirar Visto!
              </h2>
              <p className="text-white font-light">
                Com um serviço profissional, você não terá dor de cabeça para
                todo o processo do visto e entrevistas no consulado.
              </p>
            </div>
          </div>
          <Image
            alt="hero"
            src={"/images/banner-hero.jpg"}
            width={700}
            height={900}
            objectFit="contain"
            className="rounded-3xl"
          ></Image>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full justify-center items-center flex lg:flex-row flex-col gap-10">
      {renderInfo()}
      {renderBanner()}
    </div>
  );
}
