import { useRef } from 'react';

export const useInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const data = ref.current?.value;

  return { ref, data };
};
