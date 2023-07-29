export default function Header({ children }) {
  return (
    <header>
      <div className="bg-indigo-300 mx-auto p-4 shadow-md rounded-b-lg">
        <h1 className={` text-center font-semibold text-3xl `}>{children}</h1>
      </div>
    </header>
  );
}
