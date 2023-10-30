// import Cli from "./core/cli";
// import Colors from "./colors";
// import Styler from "./styler";


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


// export const cli = new Cli();
// export const colors = new Colors();
// export const styler = Styler;

import styler from "./core/styler";

console.log(styler.background([255, 255, 255]).bold(
    styler.italic.color([213, 111, 83]).crossedout("Hello World") + "Gewgewgewg"
));