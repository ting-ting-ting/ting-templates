import { useRef, useEffect, useState } from 'react';

export function useEllipsis(length: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [displayLength, setDisplayLength] = useState<number>(0);

  useEffect(() => {
    const itemHeight = containerRef.current?.offsetHeight ?? 0;
    const studentsAreaHeight = itemHeight - 32;
    const currentStudentsHeight = length * 20 + (length - 1) * 4;

    if (studentsAreaHeight >= currentStudentsHeight) {
      setDisplayLength(length);
    } else {
      setDisplayLength(Math.floor(studentsAreaHeight / 24) - 1);
    }
  }, [length]);

  return {
    containerRef,
    displayLength,
  };
}
