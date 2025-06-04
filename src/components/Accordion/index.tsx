type AccordionPropTypes = {
  title: string;
  content: string;
  isOpen: boolean;
  setIsOpen: () => void;
};

export default function Accordion(props: AccordionPropTypes) {
  const { title, content, isOpen, setIsOpen } = props;

  return (
    <div className="w-full overflow-hidden border-b mb-3 border-light-gray">
      <li>
        <h3 className="inline-block text-2xl sm:text-[44px] px-3 font-medium tracking-tighter ">
          {title}
        </h3>
        {!isOpen && (
          <div
            onClick={setIsOpen}
            className="px-3 mb-3 font-medium cursor-pointer"
          >
            + Leia Mais
          </div>
        )}
        <div
          style={{ maxHeight: isOpen ? "300px" : "0px" }}
          className=" max-h-52 transition-all duration-600 ease-in-out"
        >
          <p className="text-neutral pb-2.5 px-3">{content}</p>
        </div>
      </li>
    </div>
  );
}
