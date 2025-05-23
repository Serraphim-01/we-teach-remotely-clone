import { useEffect, useState } from 'react';

export default function useTypingEffect(text, speed = 100, delay = 1000) {
  const [typed, setTyped] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setTyped((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, text, speed]);

  useEffect(() => {
    if (delay && index === 0) {
      const delayTimer = setTimeout(() => setIndex(0), delay);
      return () => clearTimeout(delayTimer);
    }
  }, [delay, index]);

  return typed;
}
