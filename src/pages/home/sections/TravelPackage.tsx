// @ts-nocheck

import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { useRef } from "react";

export default function TravelPackage() {
    const carouselRef = useRef(null);

    function renderTitle() {
        return (
            <div className="mb-5 md:16">
                <div className="flex flex-col md:flex-row items-center md:justify-between md:items-end">
                    <AnimatedContent>
                        <div className="flex flex-col items-center md:items-start">
                            <Button variant="secondary">Pacotes</Button>
                            <h2 className="title-1 md:text-left text-center mb-4 md:mb-0">
                                Confira nossos pacotes
                            </h2>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent delay={0.5}>
                        <div className="flex gap-5">
                            <button
                                className="w-13 h-13 flex items-center
                            justify-center rounded-full border
                            cursor-pointer border-primary text-primary
                            "
                                onClick={() => carouselRef.current?.prev()}
                            >
                                <ArrowIcon
                                    direction="left"
                                    size={24}
                                    color="black"
                                />
                            </button>
                            <button
                                className="w-13 h-13 flex items-center
                            justify-center rounded-full border
                            cursor-pointer border-primary text-background bg-primary
                            "
                                onClick={() => carouselRef.current?.next()}
                            >
                                <ArrowIcon
                                    direction="right"
                                    size={24}
                                    color="white"
                                />
                            </button>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        );
    }

    function renderCarousel() {
        return (
            <AnimatedContent>
                <Carousel ref={carouselRef} />
            </AnimatedContent>
        );
    }

    return (
        <div className="py-20">
            {renderTitle()}
            {renderCarousel()}
        </div>
    );
}
