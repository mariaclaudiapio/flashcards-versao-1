import { obtemNovoId } from '../services/geraId';

export default function RadioButton({
  id = obtemNovoId(),
  name = 'nomeRadioButton',
  children: descricaoBotao = 'Descrição do Botão',
  radioChecked = false,
  clickMostraInformacao = null,
}) {
  function alteraRadioButton() {
    if (clickMostraInformacao) {
      clickMostraInformacao();
    }
  }

  return (
    <div className="flex flex-row items-center space-x-2">
      <input
        id={id}
        type="radio"
        name={name}
        checked={radioChecked}
        onChange={alteraRadioButton}
      />
      <label htmlFor={id}>{descricaoBotao}</label>
    </div>
  );
}
