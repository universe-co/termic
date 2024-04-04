import { RGB } from "../utils/rgb";

export const reset = () => ["\x1B[0m", "\x1B[0m"];

export const bold = () => ["\x1B[1m", "\x1B[22m"];

export const dim = () => ["\x1B[2m", "\x1B[22m"];

export const italic = () => ["\x1B[3m", "\x1B[23m"];

export const underline = () => ["\x1B[4m", "\x1B[24m"];

export const blink = () => ["\x1B[5m", "\x1B[25m"];

export const inverse = () => ["\x1B[7m", "\x1B[27m"];

export const hidden = () => ["\x1B[8m", "\x1B[28m"];

export const crossedout = () => ["\x1B[9m", "\x1B[29m"];

export const color = (rgb: RGB) => [`\x1B[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m`, "\x1B[39m"];

export const background = (rgb: RGB) => [`\x1B[48;2;${rgb[0]};${rgb[1]};${rgb[2]}m`, "\x1B[49m"];
