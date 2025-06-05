import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Button from "@/components/Button";
import Image from "next/image";

export default function TopPlaces() {
    function renderDetails() {
        return (
            <>
                <div
                    className="absolute w-[35%] h-1/5 rounded-bl-[60px] right-0 top-0 
                 border-b-neutral border-l-neutral border-b border-l"
                >
                    <div className="absolute w-[110%] h-full bg-gradient-to-b from-30% from-white to-transparent  right-0 "></div>
                </div>
                <div
                    className="absolute w-[35%] h-1/5 rounded-br-[60px] left-0 top-0 
                 border-b-neutral border-r-neutral border-b border-r"
                >
                    <div className="absolute w-[110%] h-full bg-gradient-to-b from-30% from-white to-transparent left-0 "></div>
                </div>
                <div
                    className="absolute w-[10vw] lg:w-[20vw] h-1/5 rounded-tr-[60px] left-0 bottom-0 
                 border-t-neutral border-r-neutral border-t border-r"
                >
                    <div className="absolute w-[110%] h-full bg-gradient-to-t from-30% from-white to-transparent left-0 "></div>
                </div>
                <div
                    className="absolute w-[10vw] lg:w-[20vw] h-1/5 rounded-tl-[60px] right-0 bottom-0 
                 border-t-neutral border-l-neutral border-t border-l"
                >
                    <div className="absolute w-[110%] h-full bg-gradient-to-t from-30% from-white to-transparent right-0 "></div>
                </div>
            </>
        );
    }

    function renderTopContent() {
        return (
            <div className="relative py-20">
                {renderDetails()}
                <AnimatedContent>
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-2">
                            <Button variant="secondary">Top Destinos</Button>
                        </div>
                        <h2 className="title-1 text-center">
                            Destinos mais procurados
                        </h2>
                        <p className="text-center text-neutral">
                            Confira os destinos mais procurados por nossos
                            clientes nos últimos meses, <br />
                            qual seria o seu novo destino?
                        </p>
                        <Button className="mt-10">Conheça mais</Button>
                    </div>
                </AnimatedContent>
            </div>
        );
    }

    function renderImage(url: string, title: string) {
        return (
            <div className="relative cursor-pointer">
                <Image
                    src={`/images/banners/${url}`}
                    width={400}
                    height={400}
                    className="rounded-3xl"
                    alt="mudar-depois"
                />
                <div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
              rounded-full  bg-[rgba(255, 255, 255, 0.15)] backdrop-blur-3xl px-4 py-1.5"
                >
                    <span className="text-background text-sm lg:text-md text-nowrap font-light tracking-tight">
                        {title}
                    </span>
                </div>
            </div>
        );
    }

    function renderImages() {
        const imagesData = [
            [
                { url: "indonesia.png", title: "Bali, Indonésia" },
                { url: "paris.png", title: "Paris, França" },
            ],
            [
                { url: "nova-york.png", title: "Nova York, Estados Unidos" },
                { url: "africa.png", title: "Cidade do Cabo, África do Sul" },
            ],
            [
                { url: "grecia.png", title: "Santorini, Grécia" },
                { url: "india.png", title: "Mumbai, Índia" },
            ],
        ];

        return (
            <div className="w-[80vw] lg:w-[60vw] max-w-[1300px] mx-auto  ">
                <AnimatedContent>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                        {imagesData.map((images) => {
                            return (
                                <div className="flex flex-col sm:flex-row md:flex-col gap-5">
                                    {images.map((image) => {
                                        return renderImage(
                                            image.url,
                                            image.title
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </AnimatedContent>
            </div>
        );
    }

    return (
        <div className="pb-20">
            {renderTopContent()}
            {renderImages()}
        </div>
    );
}
