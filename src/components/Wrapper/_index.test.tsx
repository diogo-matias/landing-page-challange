import React from "react";
import { render } from "@testing-library/react";
import Wrapper from "./";
import "@testing-library/jest-dom";

describe("Wrapper", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <Wrapper>
                <p>Conteúdo de teste</p>
            </Wrapper>
        );
        expect(getByText("Conteúdo de teste")).toBeInTheDocument();
    });

    it("aplica classes corretas no contêiner externo", () => {
        const { container } = render(<Wrapper>Teste</Wrapper>);

        const outerDiv = container.firstChild as HTMLDivElement;

        expect(outerDiv).toHaveClass("w-full");
        expect(outerDiv).toHaveClass("max-w-[1440px]");
        expect(outerDiv).toHaveClass("mx-auto");
    });

    it("permite passar props extras para a div externa", () => {
        const { container } = render(
            <Wrapper id="wrapper-id" data-testid="wrapper-test">
                Teste
            </Wrapper>
        );

        const wrapper = container.firstChild as HTMLDivElement;
        expect(wrapper).toHaveAttribute("id", "wrapper-id");
        expect(wrapper).toHaveAttribute("data-testid", "wrapper-test");
    });
});
