import { render, screen } from "@testing-library/react";
import Carousel from "./index";
import React, { createRef } from "react";

jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ src, alt }: any) => <img src={src} alt={alt} />,
}));

describe("Carousel", () => {
    it("renderiza os cards do carrossel corretamente", () => {
        render(<Carousel />);
        const titles = [
            "Passaporte",
            "Passaporte + Visto",
            "Consultoria Completa",
        ];

        titles.forEach((title) => {
            expect(screen.getAllByText(title).length).toBeGreaterThan(0);
        });
    });

    it("formata corretamente os preços", () => {
        render(<Carousel />);
        expect(screen.getAllByText(/R\$ [\d.,]+/)[0]).toBeInTheDocument();
    });

    it("exibe botões 'Contratar' em todos os cards", () => {
        render(<Carousel />);
        const buttons = screen.getAllByText("Contratar");
        expect(buttons.length).toBeGreaterThan(0);
    });
});
