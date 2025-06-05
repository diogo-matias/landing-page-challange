import Wrapper from "@/components/Wrapper";
import Hero from "./sections/Hero";
import VisaConsulting from "./sections/VisaConsulting";
import Benefits from "./sections/Benefits";
import TopPlaces from "./sections/TopPlaces";
import TravelPackage from "./sections/TravelPackage";
import LastSection from "./sections/LastSection";

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
