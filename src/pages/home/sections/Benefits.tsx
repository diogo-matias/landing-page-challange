import Accordion from "@/components/Accordion";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Benefits() {
    function renderTop() {
        return (
            <div className="flex mb-14 flex-col items-center md:items-start">
                <div>
                    <Button variant="secondary" className="">
                        Veja como funciona
                    </Button>
                </div>
                <div className="flex md:flex-row flex-col gap-8 items-center">
                    <h2 className="text-[56px] font-medium tracking-tighter md:text-nowrap text-center md:text-left">
                        Sua tranquilidade <br />
                        não tem preço!
                    </h2>
                    <p className="text-center md:text-left text-neutral">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
        );
    }

    function renderBanner() {
        return (
            <Image
                alt="family-banner"
                src={"/images/familly.png"}
                width={1366}
                height={444}
                className="rounded-3xl"
            />
        );
    }

    function Accordions() {
        const [selectedIndex, setSelectedIndex] = useState(0);

        const accordionsData = [
            {
                title: "Etapa Inicial",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
                title: "Processo de Entrevista",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
                title: "Entrega de Documentos",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
        ];

        return (
            <div>
                {accordionsData.map((data, index) => {
                    const isOpen = index === selectedIndex;

                    return (
                        <Accordion
                            title={data.title}
                            content={data.content}
                            isOpen={isOpen}
                            setIsOpen={() => setSelectedIndex(index)}
                        />
                    );
                })}
            </div>
        );
    }

    function renderAccordions() {
        return (
            <ul>
                <Accordions />
            </ul>
        );
    }

    return (
        <div className="mt-24 mb-10">
            <AnimatedContent>{renderTop()}</AnimatedContent>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-[60%]">
                    <AnimatedContent>{renderBanner()}</AnimatedContent>
                </div>

                <div className="w-full lg:w-[40%]">
                    <AnimatedContent delay={0.5}>
                        {renderAccordions()}
                    </AnimatedContent>
                </div>
            </div>
        </div>
    );
}
