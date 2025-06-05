import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useState } from "react";

const options = ["Home", "Quem somos", "Serviços", "Contato"];
const selected = "Home";

export const Header = forwardRef(function Header(props, ref) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    useImperativeHandle(ref, () => ({
        handleToggle,
    }));

    function renderSidebar() {
        return (
            <div
                style={{ translate: isOpen ? "0%" : "100%" }}
                className="fixed top-0 right-0 left-0 bottom-0 bg-white/90 backdrop-blur-xl transition-all z-50"
            >
                <div
                    className="absolute right-10 top-10 "
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon
                        fontSize={30}
                        icon={faClose}
                        className="cursor-pointer"
                    />
                </div>
                <div className="w-full flex justify-center pt-10">
                    <Image
                        className="cursor-pointer"
                        alt="logo"
                        src={"/images/logo.png"}
                        width={150}
                        height={40}
                    />
                </div>
                <nav className="flex flex-col">
                    <ul>
                        {options.map((option) => {
                            const isSelected = option === selected;
                            const customStyle = isSelected ? "font-bold" : "";

                            return (
                                <li
                                    key={option}
                                    className={`${customStyle} text-xl px-10 py-5 hover:bg-light-gray  last:border-none cursor-pointer`}
                                    onClick={handleToggle}
                                >
                                    {option}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        );
    }

    return (
        <header className="h-[100px] flex items-center w-full ">
            <nav className="flex items-center w-full justify-between gap-1.5">
                <Image
                    className="cursor-pointer "
                    alt="logo"
                    src={"/images/logo.png"}
                    width={150}
                    height={40}
                />
                <ul className="sm:flex items-center hidden">
                    {options.map((option) => {
                        const isSelected = option === selected;
                        const customStyle = isSelected ? "font-bold" : "";

                        return (
                            <li
                                key={option}
                                className={`${customStyle} p-3 text-nowrap cursor-pointer`}
                            >
                                {option}
                            </li>
                        );
                    })}
                </ul>
                <div className="flex sm:hidden mr-3">
                    <FontAwesomeIcon
                        fontSize={24}
                        icon={faBars}
                        className="cursor-pointer"
                        onClick={handleToggle}
                    />
                </div>
            </nav>
            {renderSidebar()}
        </header>
    );
});

export default Header;
