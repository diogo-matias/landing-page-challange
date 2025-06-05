import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

// Mock next/image
jest.mock("next/image", () => (props: any) => {
    return <img {...props} />;
});

describe("Header", () => {
    it("renderiza o logo", () => {
        render(<Header />);
        expect(screen.getAllByAltText("logo")[0]).toBeInTheDocument();
    });
});
