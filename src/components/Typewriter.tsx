import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: { slug: string; title: string; category: string }[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  onWordChange?: (index: number) => void;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseMs = 2200,
  onWordChange,
  className = ''
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex]?.slug || '';

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      // Pause when full word is typed
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseMs);
    } else if (isDeleting && displayText === '') {
      // Move to next word after deleting
      setIsDeleting(false);
      const nextIndex = (wordIndex + 1) % words.length;
      setWordIndex(nextIndex);
      if (onWordChange) {
        onWordChange(nextIndex);
      }
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs, onWordChange]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{displayText}</span>
      <span className="w-[2px] h-[1.1em] bg-emerald-400 ml-0.5 inline-block animate-pulse" />
    </span>
  );
};
