type ArrowIconProps = {
  size?: string | number; // Ex: '1em', '24px', 32
  color?: string;
  direction?: "up" | "down" | "left" | "right" | "topRight";
  style?: React.CSSProperties;
};

const rotationDegrees = {
  right: "0deg",
  down: "90deg",
  left: "180deg",
  up: "270deg",
  topRight: "-45deg",
};

export const ArrowIcon = ({
  size = "1em",
  color = "currentColor",
  direction = "right",
  style = {},
}: ArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        width: size,
        height: size,
        stroke: color,
        transform: `rotate(${rotationDegrees[direction]})`,
        ...style,
      }}
    >
      <path
        d="M14.43 5.92999L20.5 12L14.43 18.07"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
