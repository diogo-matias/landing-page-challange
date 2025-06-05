import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Button from "@/components/Button";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function LastSection() {
    function customButton() {
        return (
            <div className="flex justify-between w-full lg:w-[500px] max-w-[500px] pb-3.5 border-b cursor-pointer">
                <span className="text-[40px] tracking-tight">
                    Receba Novidades
                </span>
                <div className="w-10 h-10 ">
                    <ArrowIcon direction="topRight" size={40} />
                </div>
            </div>
        );
    }

    function renderTitle() {
        return (
            <div className="mb-10 flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8">
                <AnimatedContent>
                    <div className="flex flex-col items-center md:items-start  w-full md:w-[50vw] lg:w-[35vw]">
                        <h2 className="title-1 text-center md:text-left">
                            Está com alguma dúvida?
                        </h2>
                        <p className="text-neutral mt-2 text-center md:text-left">
                            Entre em contato através do nosso canal direto ao
                            cliente através do botão abaixo
                        </p>
                        <div>
                            <Button className="mt-10">
                                Central de Atendimento
                            </Button>
                        </div>
                    </div>
                </AnimatedContent>
                <AnimatedContent>
                    <div className="mt-10 md:mt-0">{customButton()}</div>
                </AnimatedContent>
            </div>
        );
    }

    function renderNav() {
        const nav = [
            {
                title: "Empresa",
                subOptions: [
                    { title: "Home", url: "" },
                    { title: "Quem somos", url: "" },
                    { title: "Serviços", url: "" },
                    { title: "Contato", url: "" },
                ],
            },
            {
                title: "Novidades",
                subOptions: [
                    { title: "Passaporte", url: "" },
                    { title: "Visto", url: "" },
                    { title: "Entrevista", url: "" },
                    { title: "Polícia Federal", url: "" },
                ],
            },
            {
                title: "Suporte",
                subOptions: [
                    { title: "FAQ", url: "" },
                    { title: "Contato", url: "" },
                    { title: "Dúvidas Frequentes", url: "" },
                ],
            },
        ];

        const social = [
            { label: "Instagram", url: "https://www.instagram.com" },
            { label: "X", url: "https://x.com/" },
            { label: "Facebook", url: "https://facebook.com" },
            { label: "Youtube", url: "https://youtube.com" },
        ];

        return (
            <footer className="flex flex-col lg:flex-row w-full justify-between items-end gap-8 mb-16">
                <div className="w-full flex flex-col justify-center md:justify-start mb-5 lg:mb-0 ">
                    <span className="font-semibold text-center md:text-left">
                        <AnimatedContent>Siga em nossas redes:</AnimatedContent>
                    </span>
                    <AnimatedContent delay={0.5}>
                        <div className="mt-5 flex gap-2 md:gap-5 justify-center md:justify-start flex-wrap">
                            {social.map((social) => {
                                return (
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={social.label}
                                        href={social.url}
                                        className="px-4 py-2 border rounded-full"
                                    >
                                        {social.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </AnimatedContent>
                </div>

                <div className="w-full">
                    <nav className="w-full">
                        <AnimatedContent>
                            <ul className="flex justify-between">
                                {nav.map((item) => {
                                    return (
                                        <div className="flex flex-col">
                                            <span className="font-medium mb-5">
                                                {item.title}
                                            </span>
                                            <div className="flex flex-col gap-3">
                                                {item.subOptions.map(
                                                    (subOption) => {
                                                        return (
                                                            <li className="text-neutral">
                                                                <Link
                                                                    href={
                                                                        subOption.url
                                                                    }
                                                                >
                                                                    {
                                                                        subOption.title
                                                                    }
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </ul>
                        </AnimatedContent>
                    </nav>
                </div>
            </footer>
        );
    }

    return (
        <div className="">
            <Wrapper>
                {renderTitle()}
                {renderNav()}
            </Wrapper>
            <div className="text-sm font-medium py-8 flex w-full justify-center items-center border-t border-t-light-gray ">
                © 2025 Tirar Visto - Todos os Direitos Reservados
            </div>
        </div>
    );
}
