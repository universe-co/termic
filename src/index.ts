/**
 * @example
 *
 * cli.println(styler.italic.crossedout("Hello World", null, colors.red));
 *
 * cli.println(styler.italic.underline("Hello World"));
 *
 * cli.println(styler.italic.underline.select("Hello World", null, colors.blue));
 *
 */

export { colors } from "./colors";
export * as animations from "./animations";
export * as cli from "./core/cli";
export * as program from "./core/program";
export { default as styler } from "./core/styler";
export { default as renderer } from "./core/renderer";
