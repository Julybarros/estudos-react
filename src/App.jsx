import { Abas } from "./components/Abas/Abas";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { ChecarNumero } from "./components/ChecarNumero/ChecarNumero";
import { Contador } from "./components/Contador/Contador";
import { Desafio1 } from "./components/Desafio1/Desafio1";
import { ListaAlunos } from "./components/ListaAlunos/ListaAlunos";
import { ListaCompras } from "./components/ListaCompras/ListaCompras";
import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
import { ListFruits } from "./components/ListFruits/ListFruits";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductList } from "./components/ProductList/ProductList";
import { Quadrado } from "./components/Quadrado/Quadrado";
import { QuestaoQuiz } from "./components/QuestaoQuiz/QuestaoQuiz";
import { Sorteio } from "./components/Sorteio/Sorteio";
import { Desafio2 } from "./components/Desafio2/Desafio2";
import { Desafio3 } from "./components/Desafio3/Desafio3";
import { ConversorTemp } from "./components/ConversorTemp/ConversorTemp";
import { Dicionario } from "./components/Dicionario/Dicionario";
import { ConversorMetros } from "./components/ConversorMetros/ConversorMetros";
import { CalculadoraPorcentagem } from "./components/Calculadoraponcentagem/CalculadoraPorcentagem";

export function App() {
  return (
    <>
      <ListaCompras />
      <ListaFuncionarios />
      <NavBar logado={true} nomeUsuario="José" />
      <NavBar logado={false} />
      <ListaAlunos />
      <ChecarNumero numero={5} />
      <ChecarNumero numero={4} />
      <ProductList />
      <Quadrado />
      <Contador />
      <Cadastro />
      <ListFruits />
      <Sorteio />
      <Abas />
      <QuestaoQuiz />
      <Desafio1 />  {/*calculadora IMC */}
      <Desafio2 /> {/* carrossel */}
      <Desafio3 /> {/* cadastro com planilhas e função apagar */}
      <ConversorTemp />
      <ConversorMetros />
      <Dicionario />
      <CalculadoraPorcentagem />
    </>
  );
}