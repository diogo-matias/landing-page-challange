import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonPropTypes = {
    variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonPropTypes) {
    const { variant, children, className, ...otherProps } = props;

    function getVariantStyle() {
        let customVariantStyle = "";

        switch (variant) {
            case "secondary":
                customVariantStyle =
                    "bg-secondary text-foreground font-medium py-2.5";
                break;

            default:
                customVariantStyle = "bg-primary text-white font-semibold ";
        }

        return customVariantStyle;
    }

    return (
        <button
            {...otherProps}
            className={twMerge([
                "px-5 py-3.5 rounded-full shrink-0 cursor-pointer",
                getVariantStyle(),
                className,
            ])}
        >
            {children}
        </button>
    );
}
