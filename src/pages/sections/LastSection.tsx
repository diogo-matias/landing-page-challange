import Button from "@/components/Button";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export default function LastSection() {
  function customButton() {
    return (
      <div className="flex justify-between w-full lg:w-[500px] max-w-[500px]  pb-3.5 border-b">
        <span className="text-[40px] tracking-tight">Receba Novidades</span>
        <div className="w-10 h-10 ">
          <ArrowIcon direction="topRight" size={40} />
        </div>
      </div>
    );
  }

  function renderTitle() {
    return (
      <div className="mb-10 flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8">
        <div className="flex flex-col items-center md:items-start  w-full md:w-[50vw] lg:w-[35vw]">
          <h2 className="title-1 text-center md:text-left">
            Está com alguma dúvida?
          </h2>
          <p className="text-neutral mt-2 text-center md:text-left">
            Entre em contato através do nosso canal direto ao cliente através do
            botão abaixo
          </p>
          <div>
            <Button className="mt-10">Central de Atendimento</Button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">{customButton()}</div>
      </div>
    );
  }

  function renderNav() {
    return (
      <div className="flex">
        <div className=""></div>
      </div>
    );
  }

  return <div className="">{renderTitle()}</div>;
}
