export default function Main({ children: main = "conteúdo principal" }) {
  return (
    <main>
      <div className="container mx-auto p-4">
        <h2>{main}</h2>
      </div>
    </main>
  );
}
