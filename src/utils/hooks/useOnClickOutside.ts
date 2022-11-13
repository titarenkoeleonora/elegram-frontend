import { MouseEvent, RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      callback(); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener('mousedown', (evt) => listener(evt as unknown as Event));
    document.addEventListener('touchstart', (evt) => listener(evt as unknown as Event));

    return () => {
      document.removeEventListener('mousedown', (evt) => listener(evt as unknown as Event));
      document.removeEventListener('touchstart', (evt) => listener(evt as unknown as Event));
    };
  }, [ref, callback]); // Reload only if ref or handler changes
};
