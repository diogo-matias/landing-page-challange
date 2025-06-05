/**
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react";
import useWindowDimensions from "../useWindowDimensions";

function resizeTo(width: number, height: number) {
    Object.defineProperty(document.documentElement, "clientWidth", {
        configurable: true,
        value: width,
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
        configurable: true,
        value: height,
    });
    window.dispatchEvent(new Event("resize"));
}

describe("useWindowDimensions", () => {
    it("retorna as dimensões iniciais da janela", () => {
        resizeTo(1024, 768);
        const { result } = renderHook(() => useWindowDimensions());

        expect(result.current.width).toBe(1024);
        expect(result.current.height).toBe(768);
        expect(result.current.md).toBe(true);
    });

    it("atualiza quando o tamanho da janela muda", () => {
        const { result } = renderHook(() => useWindowDimensions());

        act(() => {
            resizeTo(500, 400);
        });

        expect(result.current.width).toBe(500);
        expect(result.current.height).toBe(400);
        expect(result.current.md).toBe(false);
    });
});
