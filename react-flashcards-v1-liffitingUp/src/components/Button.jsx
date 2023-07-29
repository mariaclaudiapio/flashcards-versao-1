export default function Button({
  children: description = 'Descrição do botão',
  onButtonClick = null,
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className="bg-indigo-200 p-4 rounded-3xl m-2 font-semibold"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
}
