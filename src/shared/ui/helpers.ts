export interface ThemeColors {
  [key: string]: string,
};

export const themeColors: ThemeColors = {
  'blue-black': '#06141B',
  'blue-dark': '#11212D',
  'blue': '#253745',
  'blue-light': '#4A5C6A',
  'blue-accent': '#8FBDFA',
  'gray': '#9BABAB',
  'white': '#CCD0CF',
  'purple': '#6C85FF',
  'green': '#00B831',
  'gold': '#DDC300',
};

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

export const generateCssVariablesFromThemeColors = (themeColors: ThemeColors) => {
  const body = document.querySelector('body');

  const styleArray: string[] = [];
  Object.keys(themeColors).forEach((themeColor) => {
    const themeColorHexVariable = `--color-${themeColor}: ${themeColors[themeColor]}`;
    styleArray.push(themeColorHexVariable);
    const rgbMap = hexToRgb(themeColors[themeColor]);
    if (rgbMap) {
      const themeColorRgbVariable = `--color-${themeColor}-rgb: ${rgbMap.r}, ${rgbMap.g}, ${rgbMap.b}`;
      styleArray.push(themeColorRgbVariable);
    }
  });

  if (body) {
    body.setAttribute('style', styleArray.join('; '));
  }
};
