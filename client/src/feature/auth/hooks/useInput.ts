import { useRef } from 'react';
import { useBoolean } from '@chakra-ui/hooks';

export const useInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const data = ref.current?.value;
  const [watch, setWatch] = useBoolean(false);

  return { ref, data, watch, setWatch };
};
