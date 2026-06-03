import { useState, useEffect, useCallback } from 'react';

export function useTypingEffect(words, options = {}) {
  const {
    typingSpeed = 80,
    deletingSpeed = 50,
    pauseDuration = 2000,
    startDelay = 1000,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted || !words.length) return;

    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, isStarted, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isDeleting, currentWord: words[wordIndex] };
}
