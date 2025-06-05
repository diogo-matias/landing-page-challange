/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import YoutubeEmbed from "./";

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img {...props} />;
    },
}));

describe("YoutubeEmbed", () => {
    it("renderiza o thumbnail e não exibe o iframe inicialmente", () => {
        render(<YoutubeEmbed />);

        expect(screen.getByAltText(/YouTube Video/i)).toBeInTheDocument();
        expect(
            screen.queryByTitle(/YouTube video player/i)
        ).not.toBeInTheDocument();
    });

    it("abre o vídeo ao clicar no thumbnail", () => {
        render(<YoutubeEmbed />);

        fireEvent.click(screen.getByAltText(/YouTube Video/i));

        expect(screen.getByTitle(/YouTube video player/i)).toBeInTheDocument();
    });

    it("abre o vídeo ao clicar no botão de seta", () => {
        render(<YoutubeEmbed />);

        fireEvent.click(screen.getByRole("button"));

        expect(screen.getByTitle(/YouTube video player/i)).toBeInTheDocument();
    });

    it("fecha o vídeo ao clicar fora do iframe", () => {
        render(<YoutubeEmbed />);

        fireEvent.click(screen.getByAltText(/YouTube Video/i));
        const iframe = screen.getByTitle(/YouTube video player/i);

        fireEvent.click(iframe.parentElement as HTMLElement);

        expect(
            screen.queryByTitle(/YouTube video player/i)
        ).not.toBeInTheDocument();
    });
});
