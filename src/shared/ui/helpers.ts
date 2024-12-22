export interface ThemeColors {
  [key: string]: string,
};

export const themeColors: ThemeColors = {
  'white': '#FFFFFF',
  'gray-1': '#f8f9fa',
  'gray-2': '#e9ecef',
  'gray-3': '#dee2e6',
  'gray-4': '#ced4da',
  'gray-5': '#adb5bd',
  'gray-6': '#6c757d',
  'gray-7': '#495057',
  'gray-8': '#343a40',
  'black': '#212529',
  'blue': '#0041B1',
  'glass': '#EDF6FF',
  'gold': '#FFD700',
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
