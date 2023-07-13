export default function Botao({
  children: descricao = 'descrição do botão',
  onClickBotao = null,
}) {
  function ativaBotao() {
    if (onClickBotao) {
      onClickBotao();
    }
  }
  return (
    <button
      className="bg-indigo-200 p-4 rounded-3xl m-2 font-semibold"
      onClick={ativaBotao}
    >
      {descricao}
    </button>
  );
}
