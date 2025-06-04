import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowIcon } from "./icons/ArrowIcon";

const YoutubeEmbed = () => {
    const [playing, setPlaying] = useState(false);
    const videoId = "6y5CqAHxGX0";

    const thumbnailUrl = `/images/thumb.png`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    function clickOutside(e: React.MouseEvent<HTMLDivElement>) {
        if (e.currentTarget === e.target) {
            setPlaying(false);
        }
    }

    return (
        <>
            <Image
                src={thumbnailUrl}
                alt="YouTube Video"
                height={800}
                width={800}
                style={{ objectFit: "cover" }}
                className="cursor-pointer"
                onClick={() => setPlaying(true)}
            />
            <div className="flex justify-between mt-3 gap-4">
                <div>
                    <p className="font-semibold text-2xl lg:text-[16px]">
                        Conheça a bruna
                    </p>
                    <span className="text-neutral text-xl lg:text-sm">
                        ver video
                    </span>
                </div>
                <div>
                    <Button
                        onClick={() => setPlaying(true)}
                        className="p-0 h-9 w-9"
                    >
                        <ArrowIcon color="white" direction="right" size={24} />
                    </Button>
                </div>
            </div>
            {playing && (
                <div
                    onClick={clickOutside}
                    className="fixed flex justify-center items-center top-0 left-0 bg-black/50 h-screen w-screen z-50"
                >
                    <iframe
                        className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video"
                        src={embedUrl}
                        title="YouTube video player"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}
        </>
    );
};

export default YoutubeEmbed;
