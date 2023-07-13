export default function Header({ children: header = "cabeçalho do site" }) {
  return (
    <header>
      <div className="bg-indigo-300 mx-auto p-4 shadow-md rounded-b-lg">
        <h1 className="text-center font-semibold text-3xl">{header}</h1>
      </div>
    </header>
  );
}
