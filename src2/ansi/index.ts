import { RGB } from "../utils/rgb";

export const reset = (str: string) => `\x1B[0m${str}\x1B[0m`;

export const bold = (str: string) => `\x1B[1m${str}\x1B[22m`;

export const dim = (str: string) => `\x1B[2m${str}\x1B[22m`;

export const italic = (str: string) => `\x1B[3m${str}\x1B[23m`;

export const underline = (str: string) => `\x1B[4m${str}\x1B[24m`;

export const blink = (str: string) => `\x1B[5m${str}\x1B[25m`;

export const inverse = (str: string) => `\x1B[7m${str}\x1B[27m`;

export const hidden = (str: string) => `\x1B[8m${str}\x1B[28m`;

export const crossedout = (str: string) => `\x1B[9m${str}\x1B[29m`;



export const color = (str: string, rgb: RGB) => `\x1B[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m${str}\x1B[39m`;

export const background = (str: string, rgb: RGB) => `\x1B[48;2;${rgb[0]};${rgb[1]};${rgb[2]}m${str}\x1B[49m`;