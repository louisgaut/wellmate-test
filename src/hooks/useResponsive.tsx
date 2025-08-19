import { useWindowDimensions } from "react-native";

const BASE_WIDTH = 375; // iPhone X largeur de référence

export function useResponsive() {
  const { width, height, fontScale } = useWindowDimensions();

  // Mise à l’échelle simple
  const scale = (size: number) => (width / BASE_WIDTH) * size;

  // Pour adoucir la variation (évite typo énorme sur tablette)
  const moderateScale = (size: number, factor: number = 0.5) =>
    size + (scale(size) - size) * factor;

  return {
    // Typo qui respecte l’accessibilité
    font: (size: number, factor: number = 0.35) =>
      moderateScale(size, factor) * fontScale,

    // Espacements, marges, paddings
    spacing: (size: number, factor: number = 0.5) =>
      moderateScale(size, factor),

    // Tailles génériques (hauteur/largeur)
    length: (size: number, factor: number = 0.5) =>
      moderateScale(size, factor),

    // Infos device utiles
    width,
    height,
    isLandscape: width > height,
  };
}