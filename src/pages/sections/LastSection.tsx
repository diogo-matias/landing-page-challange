import Button from "@/components/Button";

export default function LastSection() {
    function customButton() {
        return <button>Receba Novidades</button>;
    }

    function renderTitle() {
        return (
            <div className="mb-10 flex justify-between">
                <div className="bg-red-100 w-[38vw]">
                    <h2 className="title-1">Está com alguma dúvida?</h2>
                    <p className="text-neutral mt-2">
                        Entre em contato através do nosso canal direto ao
                        cliente através do botão abaixo
                    </p>
                    <Button className="mt-10">Central de Atendimento</Button>
                </div>
                <div className="w-[500px]">{customButton()}</div>
            </div>
        );
    }

    return <div className="">{renderTitle()}</div>;
}
