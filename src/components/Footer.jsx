export default function Footer({ children: footer = "descrição do rodapé" }) {
  return (
    <footer
      className={`bg-indigo-300 mx-auto p-4
  shadow-md rounded-t-lg`}
    >
      <p className="text-center">{footer}</p>
    </footer>
  );
}
