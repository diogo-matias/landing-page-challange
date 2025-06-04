import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function VisaConsulting() {
  function renderIconContainer(
    icon: string,
    rotation: string,
    className: string
  ) {
    return (
      <div
        style={{ rotate: `${rotation}deg` }}
        className={twMerge([
          `bg-background p-2.5 shadow-xl rounded-[10px] absolute`,
          className,
        ])}
      >
        {renderIcon(icon)}
      </div>
    );
  }

  function renderIcon(icon: string) {
    return (
      <Image src={`/icons/${icon}.svg`} width={24} height={24} alt={icon} />
    );
  }
  return (
    <div className="mt-5 bg-neutral-paper">
      <Wrapper>
        <div className="py-20 relative">
          <div className="relative">
            {renderIconContainer("phone", "12", "left-3/4 top-[-40px]")}
            <h1 className="text-5xl md:text-6xl text-center lg:text-left tracking-tight uppercase font-light lg:font-medium">
              Consultoria completa para <br /> tirar seu visto
            </h1>
          </div>
          <div className="relative mt-5 lg:mt-0">
            {renderIconContainer("clock", "-19", "bottom-[-40px] left-1/4")}
            <h1 className="text-center lg:text-right text-5xl md:text-6xl tracking-tight uppercase font-medium italic">
              você esta em boas mãos!
            </h1>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
