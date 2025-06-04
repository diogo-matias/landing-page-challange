import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { useRef } from "react";

export default function TravelPackage() {
    const carouselRef = useRef(null);

    function renderTitle() {
        return (
            <div className="mb-5 md:16">
                <div className="flex flex-col md:flex-row items-center md:justify-between md:items-end">
                    <div className="flex flex-col items-center md:items-start">
                        <Button variant="secondary">Pacotes</Button>
                        <h2 className="title-1 md:text-left text-center mb-4 md:mb-0">
                            Confira nossos pacotes
                        </h2>
                    </div>
                    <div className="flex gap-5">
                        <button
                            className="w-13 h-13 flex items-center
                             justify-center rounded-full border
                             cursor-pointer border-primary text-primary
                             "
                            onClick={() => carouselRef.current?.prev()}
                        >
                            {"<-"}
                        </button>
                        <button
                            className="w-13 h-13 flex items-center
                             justify-center rounded-full border
                             cursor-pointer border-primary text-background bg-primary
                             "
                            onClick={() => carouselRef.current?.next()}
                        >
                            {"->"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    function renderCarousel() {
        return <Carousel ref={carouselRef} />;
    }

    return (
        <div className="py-20">
            {renderTitle()}
            {renderCarousel()}
        </div>
    );
}
