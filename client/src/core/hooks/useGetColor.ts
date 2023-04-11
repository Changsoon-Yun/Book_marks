import theme from '@/lib/chakra/theme/theme';
import { useColorModeValue } from '@chakra-ui/react';

type Density = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'white' | 'black' | 'main';

const getColor = (density: Density) => {
  const color = {
    light: '',
    dark: '',
  };

  if (density === 'main') {
    color.light = theme.colors.blue['500'];
    color.dark = theme.colors.blue['600'];
    return color;
  }

  if (density === 'white') {
    color.light = theme.colors.white;
    color.dark = theme.colors.blackAlpha['800'];
    return color;
  }
  if (density === 'black') {
    color.light = theme.colors.blackAlpha['800'];
    color.dark = theme.colors.white;
    return color;
  }

  if (density === 50) {
    color.light = theme.colors.gray['50'];
    color.dark = theme.colors.gray['900'];
    return color;
  }

  if (density === 500) {
    color.light = theme.colors.gray['500'];
    color.dark = theme.colors.gray['500'];
    return color;
  }

  const contrast = 1000 - density;
  color.light = theme.colors.gray[density];
  color.dark = theme.colors.gray[contrast];

  return color;
};

/**
 * density가 낮을수록 밝음
 * @param {number} density
 */
export function useGetColor(density: Density) {
  const color = useColorModeValue(getColor(density).light, getColor(density).dark);
  return { color };
}
