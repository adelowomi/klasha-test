import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    50: "#00a0e9",
    100: "#A3A3A3",
    200: "#EF2C5A",
    300: "#000000",
    400: "#FFFBF7",
    500: "#EF2C5A",
    600: "#F0F0F0",
    700: "#8F8F8F",
    800: "#D8D8D8",
    900: "#BDBDBD",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
