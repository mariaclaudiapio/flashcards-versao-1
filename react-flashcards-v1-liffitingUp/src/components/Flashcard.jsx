import { useEffect, useState } from 'react';

export default function FlashCard({
  id,
  title = 'Título do cartão',
  description = 'Descrição do cartão',
  showFlashcardTitle = true,
  onToggleFlashcard = null,
}) {
  const fontSizeClassName = showFlashcardTitle ? 'text-2xl' : 'text-md';

  function handleCardClick() {
    if (onToggleFlashcard) {
      onToggleFlashcard(id);
    }
  }

  return (
    <div
      className={` p-4 m-4 w-80 h-60 rounded-xl shadow-md cursor-pointer
      flex flex-row items-center justify-center my-4 text-center
      font-semibold
    bg-pink-200 ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showFlashcardTitle ? title : description}
    </div>
  );
}
