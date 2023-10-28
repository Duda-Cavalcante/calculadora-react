//area de import

import './App.css';
import { useState } from 'react';

export default function App(){
	const [primeiroValor, setPrimeiroValor] = useState("");

	const [segundoValor, setSegundoValor] = useState("");

    const [operador, setOperador] = useState("")

	const [resultado, setResultado] = useState();

	const CapturarValor = (item) => {
    if (operador === "") {
        setPrimeiroValor (primeiroValor + item.target.value);
    } else {
        setSegundoValor (segundoValor + item.target.value);
    }
    }

    const CapturarOperador = (item) => {
        setOperador (item.target.value);
    }
        
    const Soma = () => {
    setResultado( Number(primeiroValor) + Number(segundoValor) );
    };
        
    const Subtracao = () => {
    setResultado(primeiroValor - segundoValor);
          };

    const Multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
          };
        
    const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
    };        


    const Limpar = () => {
        setPrimeiroValor("");
        setSegundoValor("");
        setResultado("");
        setOperador("")
    };
    
	return (
	<div>
        <h1>Calculadora</h1>
        
		<div className="calculadora">
        <div className="resultado">{resultado}</div>
        <div className="buttons">
          <button className="button-cinza" onClick={Limpar}>AC</button>
          <button className="button-cinza" value={"+"} onClick={Soma}>±</button>
          <button className="button-cinza" value={"%"} onClick={Soma}>%</button>
          <button className="button-cinza" value={"÷"} onClick={CapturarOperador}>÷</button>

          <button className="button-light-cinza" value={"7"} onClick={CapturarValor}>7</button>
          <button className="button-light-cinza" value={"8"} onClick={CapturarValor}>8</button>
          <button className="button-light-cinza" value={"9"} onClick={CapturarValor}>9</button>
          <button className="button-azul" onClick={CapturarOperador}>x</button>

          <button className="button-light-cinza" value={"4"} onClick={CapturarValor}>4</button>
          <button className="button-light-cinza" value={"5"} onClick={CapturarValor}>5</button>
          <button className="button-light-cinza" value={"6"} onClick={CapturarValor}>6</button>
          <button className="button-azul" value={"-"} onClick={CapturarOperador}>-</button>
          
          <button className="button-light-cinza" value={"1"} onClick={CapturarValor}>1</button>
          <button className="button-light-cinza" value={"2"} onClick={CapturarValor}>2</button>
          <button className="button-light-cinza" value={"3"} onClick={CapturarValor}>3</button>
          <button className="button-azul" value={"+"} onClick={CapturarOperador}>+</button>

          <button className="button-light-cinza button-zero" value={"0"} onClick={CapturarValor}>0</button>
          <button className="button-light-cinza">,</button>
          <button className="button-azul" onClick={Soma}>=</button>
      </div>

  </div>
			<h1>{primeiroValor}</h1>
            <h1>{segundoValor}</h1>
            <h1>{operador}</h1>
		</div>
	);
    }
    