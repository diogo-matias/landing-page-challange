import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Header from "@/components/Header";
import { useRef } from "react";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import BlurText from "@/components/BlurText/BlurText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

export default function Hero() {
  const headerRef = useRef(null);

  function renderDivider() {
    return <div className="w-full h-[1.5px] bg-light-gray" />;
  }

  function renderHeader() {
    return <Header ref={headerRef} />;
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
      <div className="grid grid-cols-3 gap-6 divide-x divide-light-gray md:px-5 lg:px-0">
        {renderNumbersInfos(509, "Vistos tirados")}
        {renderNumbersInfos(602, "Passaportes Tirados")}
        {renderNumbersInfos(634, "Famílias Felizes")}
      </div>
    );
  }

  function renderMainInfo() {
    return (
      <div className="mt-10 lg:mt-[60px] flex lg:flex-row flex-col items-center lg:justify-between lg:items-end gap-4 mb-5 lg:mb-0">
        <div className="w-[80%] md:w-[50%] flex flex-col lg:items-start items-center">
          <p className="text-neutral text-center lg:text-start tracking-tight">
            Com uma equipe altamente treinada, nós temos todos os procedimentos
            para que seu processo seja o mais tranquilo e rápido. Uma
            consultoria completa para você e sua família não ter nenhuma
            preocupação na sua viagem.
          </p>
          <div>
            <Button className="mt-10 mb-10 lg:mb-0 flex gap-3">
              Saiba mais <ArrowIcon direction="right" color="white" size={24} />{" "}
            </Button>
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[40%] flex items-end">
          <div className="flex flex-col">
            <YoutubeEmbed />
          </div>
        </div>
      </div>
    );
  }

  function renderInfo() {
    return (
      <div className="w-[90%] lg:w-[40%] flex flex-col items-center">
        {renderHeader()}
        <AnimatedContent>
          <h1 className="sm:text-[54px] text-5xl text-center lg:text-left mb-8 mt-10 font-medium tracking-[-0.05em]">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </h1>
        </AnimatedContent>
        <AnimatedContent delay={0.5}>
          {renderDivider()}
          {renderMainInfo()}
        </AnimatedContent>

        <AnimatedContent delay={1}>
          <div className="mt-10 lg:mt-[90px]">{renderBottomInfo()}</div>
        </AnimatedContent>
      </div>
    );
  }

  function renderBanner() {
    return (
      <div className="mt-5 flex-1 max-h-[100vh] flex items-center xl:justify-start justify-end">
        <AnimatedContent delay={0.5}>
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
              width={762}
              height={900}
              objectFit="contain"
              className="rounded-3xl"
            ></Image>
          </div>
        </AnimatedContent>
      </div>
    );
  }

  return (
    <div className="justify-center items-center lg:items-stretch flex lg:flex-row flex-col gap-10">
      {renderInfo()}
      {renderBanner()}
    </div>
  );
}
