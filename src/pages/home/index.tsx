import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./sections/Hero"));
const VisaConsulting = dynamic(() => import("./sections/VisaConsulting"));
const Benefits = dynamic(() => import("./sections/Benefits"));
const TopPlaces = dynamic(() => import("./sections/TopPlaces"));
const TravelPackage = dynamic(() => import("./sections/TravelPackage"));
const LastSection = dynamic(() => import("./sections/LastSection"));
const Wrapper = dynamic(() => import("@/components/Wrapper"));

export default function Home() {
    return (
        <div>
            <div
                className={`w-[100%] max-w-[1440px] mx-auto flex flex-col justify-center`}
            >
                <div className="lg:ml-14 lg:mr-5 md:mx-5 mx-2 ">
                    <Hero />
                </div>
            </div>
            <VisaConsulting />
            <Wrapper>
                <Benefits />
            </Wrapper>
            <TopPlaces />
            <Wrapper>
                <TravelPackage />
            </Wrapper>
            <LastSection />
        </div>
    );
}
