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
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const { md } = useWindowDimensions();

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

  const updateItemWidth = () => {
    if (itemRef.current) {
      const width = itemRef.current.getBoundingClientRect().width;
      setItemWidth(width);
    }
  };

  useLayoutEffect(() => {
    updateItemWidth();
  }, [md]);

  useEffect(() => {
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const next = () => {
    if (!containerRef.current || itemWidth === 0) return;

    const visibleWidth = containerRef.current.offsetWidth;
    const itemsPerView = Math.floor(visibleWidth / itemWidth);
    const maxIndex = items.length - itemsPerView;

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
    if (container && itemWidth > 0) {
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  }, [index, itemWidth]);

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
          className="rounded-2xl cursor-pointer"
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
        <h2 className="font-semibold text-[28px] mb-4">{item.title}</h2>
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
        <div className="flex justify-between items-center mt-5">
          <div>
            <p>A partir de</p>
            <p className="font-semibold text-2xl mb-4">
              {parseCurrency(item.price)}
            </p>
          </div>
          <div>
            <Button className="text-sm px-4 md:px-5 md:py-4">Contratar</Button>
          </div>
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
        {items.map((item, idx) => (
          <div
            key={item.id}
            ref={idx === 0 ? itemRef : null}
            className={twMerge("w-[300px] md:w-[445px] p-2 shrink-0")}
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Carousel;
