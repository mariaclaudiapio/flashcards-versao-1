import { useState } from 'react';

import Cartao from '../components/Cartao';
import Cabecalho from '../components/Cabecalho';
import Principal from '../components/Principal';
import { listaDeCartoes } from '../data/listaDeCartoes';
import Container from '../components/Container';
import Botao from '../components/Botao';
import { embaralhaArray } from '../helpers/embaralhaArray';
import Rodape from '../components/Rodape';
import RadioButton from '../components/RadioButton';

export default function Home() {
  const [cartoes, setCartoes] = useState(listaDeCartoes);
  const [mostraTitulo, setMostraTitulo] = useState(true);

  function ativaBotao() {
    const cartoesEmbaralhados = embaralhaArray(cartoes);
    setCartoes(cartoesEmbaralhados);
  }

  function cliqueMostraTitulo() {
    setMostraTitulo(true);
  }

  function cliqueMostraDescricao() {
    setMostraTitulo(false);
  }

  return (
    <div>
      <Cabecalho>Flashcards v1</Cabecalho>

      <Principal>
        <div className="text-center mb-4">
          <Botao onClickBotao={ativaBotao}>Embaralhar Cartões</Botao>
        </div>
        <div
          className={`flex flex-row items-center justify-center
        space-x-4 m-4`}
        >
          <RadioButton
            id="mostraTitulo"
            name="mostraInformacao"
            radioChecked={mostraTitulo}
            clickRadioButton={cliqueMostraTitulo}
          >
            Mostrar Título
          </RadioButton>
          <RadioButton
            id="mostraDescricao"
            name="mostraInformacao"
            radioChecked={!mostraTitulo}
            clickRadioButton={cliqueMostraDescricao}
          >
            Mostrar Descrição
          </RadioButton>
        </div>

        <Container>
          {cartoes.map(({ id, titulo, descricao }) => {
            return <Cartao key={id} titulo={titulo} descricao={descricao} />;
          })}
        </Container>
      </Principal>

      <Rodape>Desenvolvido por &copy;Maria Cláudia</Rodape>
    </div>
  );
}

// continuar da aula 4.6
