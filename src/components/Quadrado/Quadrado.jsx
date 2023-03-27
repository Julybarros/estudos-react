import "./Quadrado.css"

function quandoClicar() {
    {/*alert("CLICOOOOOOOOOOOOU")*/ }
}

function quandoMouseEntrar(evento) {
    const quadrado = evento.target;
    quadrado.style.backgroundColor = "red";
}

function quandoMouseSair(evento) {
    const quadrado = evento.target;
    quadrado.style.backgroundColor = "blue";
}
function duploclick(evento) {
    const quadrado = evento.target;
    quadrado.style.backgroundColor = "orange";
}

export function Quadrado() {
    return (
        <div
            className="quadrado"
            onClick={quandoClicar}
            onDoubleClick={duploclick}
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
        >
        </div>
    );
}