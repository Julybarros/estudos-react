import "./Contador.css"
import { useState } from "react"; // useState -> Uma função

export function Contador() {
    // useState é uma função que cria um estado
    // Um estado é uma variavel especial que sincroniza as mudanças na página
    // indice 0 -> estado
    // indece 1 -> função que muda o estado
    // Retorna um array (tem apenas duas posições)

    // const array = useState(10); 
    // let numero = array[0];
    // let setNumero = array[1];

    // destruct (desestruturação)
    const [numero, setNumero] = useState(0);

    // Incrementar
    function inc() {
        const novoNumero = numero + 1;
        setNumero(novoNumero);
    }

    // Decrementar
    function dec() {
        const novoNumero = numero - 1;
        setNumero(novoNumero);
    }
    function mais100() {
        const novoNumero = numero + 100;
        setNumero(novoNumero);
    }
    function vezes3() {
        const novoNumero = numero * 3;
        setNumero(novoNumero);
    }
    function metade() {
        const novoNumero = numero / 2;
        setNumero(novoNumero);
    }
    function menos50() {
        const novoNumero = numero - 50;
        setNumero(novoNumero);
    }
    function menos5() {
        const novoNumero = numero - 5;
        setNumero(novoNumero);
    }
    function zerar() {
        setNumero(0);
    }

    return (
        <div>
            <h1>{numero}</h1>

            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onClick={mais100}>+100</button>
            <button onClick={vezes3}>*3</button>
            <button onClick={metade}>/2</button>
            <button onClick={menos50}>-50</button>
            <button onClick={menos5}>-5</button>
            <button onClick={zerar}>Zerar</button>
        </div>

    );
}