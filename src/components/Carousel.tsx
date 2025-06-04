import Image from "next/image";
import React, {
    useRef,
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
    useLayoutEffect,
} from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import useWindowDimensions from "@/hooks/useWindowDimentions";

const Carousel = forwardRef((props, ref) => {
    const { width, md } = useWindowDimensions();

    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(445 + 16);

    useLayoutEffect(() => {
        if (md) {
            setItemWidth(445 + 16);
        } else {
            setItemWidth(300 + 16);
        }
    }, [md]);

    const items = [
        {
            id: 1,
            imageUrl: "carousel_1.png",
            title: "Passaporte",
            type: "On-line",
            duration: "45 dias",
            price: 890,
        },
        {
            id: 2,
            imageUrl: "carousel_2.png",
            title: "Passaporte + Visto",
            type: "On-line + Presencial",
            duration: "25 dias",
            price: 1290,
        },
        {
            id: 3,
            imageUrl: "carousel_3.png",
            title: "Consultoria Completa",
            type: "Presencial Completo",
            duration: "10 dias",
            price: 1890,
        },
        {
            id: 4,
            imageUrl: "carousel_1.png",
            title: "Passaporte",
            type: "On-line",
            duration: "45 dias",
            price: 890,
        },
        {
            id: 5,
            imageUrl: "carousel_2.png",
            title: "Passaporte + Visto",
            type: "On-line + Presencial",
            duration: "25 dias",
            price: 1290,
        },
    ];

    const next = () => {
        const maxIndex = items.length - 1;
        setIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    useImperativeHandle(ref, () => ({
        next,
        prev,
    }));

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({
                left: index * itemWidth,
                behavior: "smooth",
            });
        }
    }, [index]);

    function parseCurrency(price: number) {
        return `R$ ${price
            .toFixed(2)
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }

    function renderCard(item: (typeof items)[0]) {
        return (
            <div className="border border-light-gray rounded-3xl px-4 py-4 flex flex-col">
                <Image
                    className="rounded-2xl"
                    alt="package-image"
                    width={990}
                    height={999}
                    src={`/images/${item.imageUrl}`}
                />
                <div className="flex gap-4 my-5">
                    <span className="rounded-full border border-foreground font-semibold py-1.5 px-5">
                        Basic
                    </span>
                    <span className="rounded-full border border-neutral font-semibold text-neutral py-1.5 px-5">
                        Premium
                    </span>
                </div>
                <h2 className="font-semibold text-2xl mb-4">{item.title}</h2>
                <div className="flex justify-between pb-5 border-b border-b-light-gray">
                    <div className="w-1/3">
                        <p className="mb-2 font-medium">Atendimento</p>
                        <p className="text-neutral text-nowrap">{item.type}</p>
                    </div>
                    <div className="w-1/3">
                        <p className="mb-2 font-medium">Tempo</p>
                        <p className="text-neutral">{item.duration}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <div>
                        <p>A partir de</p>
                        <p className="font-semibold text-2xl mb-4">
                            {parseCurrency(item.price)}
                        </p>
                    </div>
                    <Button className="md:px-5 md:py-3.5 py-1 px-3">
                        Contratar
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full">
            <div
                ref={containerRef}
                className="flex overflow-hidden scroll-smooth w-full"
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={twMerge([
                            `w-[300px] md:w-[445px] p-2 shrink-0`,
                        ])}
                    >
                        {renderCard(item)}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Carousel;
