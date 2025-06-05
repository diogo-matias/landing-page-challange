import { render, screen } from "@testing-library/react";
import Home from "./index";

jest.mock("./sections/Hero", () => () => (
    <div data-testid="hero-section">Hero Section</div>
));
jest.mock("./sections/VisaConsulting", () => () => (
    <div data-testid="visa-section">VisaConsulting Section</div>
));
jest.mock("./sections/Benefits", () => () => (
    <div data-testid="benefits-section">Benefits Section</div>
));
jest.mock("./sections/TopPlaces", () => () => (
    <div data-testid="topplaces-section">TopPlaces Section</div>
));
jest.mock("./sections/TravelPackage", () => () => (
    <div data-testid="travelpackage-section">TravelPackage Section</div>
));
jest.mock("./sections/LastSection", () => () => (
    <div data-testid="lastsection-section">LastSection Section</div>
));

describe("Home page", () => {
    it("renderiza todas as seções principais", () => {
        render(<Home />);
        expect(screen.getByTestId("hero-section")).toBeInTheDocument();
        expect(screen.getByTestId("visa-section")).toBeInTheDocument();
        expect(screen.getByTestId("benefits-section")).toBeInTheDocument();
        expect(screen.getByTestId("topplaces-section")).toBeInTheDocument();
        expect(screen.getByTestId("travelpackage-section")).toBeInTheDocument();
        expect(screen.getByTestId("lastsection-section")).toBeInTheDocument();
    });
});
