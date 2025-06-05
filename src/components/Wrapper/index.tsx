import { HTMLAttributes } from "react";

type WrapperProps = HTMLAttributes<HTMLDivElement>;

export default function Wrapper(props: WrapperProps) {
  const { children, ...otherProps } = props;

  return (
    <div {...otherProps} className="w-full max-w-[1440px] mx-auto">
      <div className="lg:mx-14 md:mx-5 mx-5">{children}</div>
    </div>
  );
}
