import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from ".";

describe("Accordion component", () => {
    const title = "Título de Exemplo";
    const content = "Conteúdo do acordeão";

    test('renderiza título e botão "+ Leia Mais" quando fechado', () => {
        const setIsOpen = jest.fn();

        render(
            <Accordion
                title={title}
                content={content}
                isOpen={false}
                setIsOpen={setIsOpen}
            />
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText("+ Leia Mais")).toBeInTheDocument();
        expect(screen.queryByText(content)).toBeInTheDocument();
    });

    test('chama setIsOpen ao clicar em "+ Leia Mais"', () => {
        const setIsOpen = jest.fn();

        render(
            <Accordion
                title={title}
                content={content}
                isOpen={false}
                setIsOpen={setIsOpen}
            />
        );

        fireEvent.click(screen.getByText("+ Leia Mais"));

        expect(setIsOpen).toHaveBeenCalledTimes(1);
    });

    test("exibe conteúdo quando isOpen é true", () => {
        const setIsOpen = jest.fn();

        render(
            <Accordion
                title={title}
                content={content}
                isOpen={true}
                setIsOpen={setIsOpen}
            />
        );

        expect(screen.getByText(content)).toBeInTheDocument();
        expect(screen.queryByText("+ Leia Mais")).not.toBeInTheDocument();
    });
});
