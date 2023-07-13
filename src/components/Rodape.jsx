export default function Rodape({ children: rodape = 'descrição do rodapé' }) {
  return (
    <footer
      className={`bg-indigo-300 mx-auto p-4
  shadow-md rounded-t-lg`}
    >
      <p className="text-center">{rodape}</p>
    </footer>
  );
}
