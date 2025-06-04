import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index";

describe("Button component", () => {
    it("renders children correctly", () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });

    it("applies primary variant classes by default", () => {
        render(<Button>Primary</Button>);
        const btn = screen.getByRole("button");
        expect(btn).toHaveClass("bg-primary");
        expect(btn).toHaveClass("text-white");
        expect(btn).toHaveClass("font-semibold");
    });

    it("applies secondary variant classes when variant='secondary'", () => {
        render(<Button variant="secondary">Secondary</Button>);
        const btn = screen.getByRole("button");
        expect(btn).toHaveClass("bg-secondary");
        expect(btn).toHaveClass("text-foreground");
        expect(btn).toHaveClass("font-medium");
    });

    it("merges additional className passed via props", () => {
        render(<Button className="custom-class">Test</Button>);
        expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("passes native button props correctly", () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    });
});
