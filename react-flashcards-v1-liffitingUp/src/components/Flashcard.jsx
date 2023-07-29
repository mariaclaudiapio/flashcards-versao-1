import { useEffect, useState } from 'react';

export default function FlashCard({
  title = 'Título do cartão',
  description = 'Descrição do cartão',
  showFlashcardTitle = true,
}) {
  const [showTitle, setShowTitle] = useState(showFlashcardTitle);

  useEffect(() => {
    setShowTitle(showFlashcardTitle);
  }, [showFlashcardTitle]);

  const fontSizeClassName = showTitle ? 'text-2xl' : 'text-md';

  function handleCardClick() {
    // setShowTitle(!showTitle);
    setShowTitle(currentShowTitle => !currentShowTitle);
  }

  return (
    <div
      className={` p-4 m-4 w-80 h-60 rounded-xl shadow-md cursor-pointer
      flex flex-row items-center justify-center my-4 text-center
      font-semibold
    bg-indigo-100 ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
