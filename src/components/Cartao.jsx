import { useEffect, useState } from 'react';

export default function Cartao({
  titulo = 'Título do cartão',
  descricao = 'Descrição do cartão',
  mostraTituloCartao = true,
}) {
  const [mostraTitulo, setMostraTitulo] = useState(mostraTituloCartao);

  useEffect(() => {
    setMostraTitulo(mostraTituloCartao);
  }, [mostraTituloCartao]);

  const tamanhoDaFonte = mostraTitulo ? 'text-2xl' : 'text-md';

  function alteraLadoDoCartao() {
    setMostraTitulo(ladoAtual => !ladoAtual);
  }

  return (
    <div
      className={` p-4 m-4 w-80 h-60 rounded-xl shadow-md cursor-pointer
      flex flex-row items-center justify-center my-4 text-center
      font-semibold ${tamanhoDaFonte}
    bg-indigo-100 `}
      onClick={alteraLadoDoCartao}
    >
      {mostraTitulo ? titulo : descricao}
    </div>
  );
}
