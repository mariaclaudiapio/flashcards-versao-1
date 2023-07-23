export default function Main({ children }) {
  return (
    <main>
      <div className="container mx-auto p-4">
        <h2>{children}</h2>
      </div>
    </main>
  );
}
