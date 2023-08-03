export default function Footer({ children: footer = 'Descrição do rodapé' }) {
  return (
    <footer
      className={`bg-pink-300 mx-auto p-4
  shadow-md rounded-t-lg`}
    >
      <p className="text-center font-semibold">{footer}</p>
    </footer>
  );
}
