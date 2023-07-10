export default function Container({ children: flashcards }) {
  return (
    <div
      className={` p-4 flex flex-row rounded-lg
      items-center justify-center flex-wrap bg-yellow-100`}
    >
      {flashcards}
    </div>
  );
}
