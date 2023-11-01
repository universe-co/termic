const { cli, styler, colors, renderer } = require('./index.js');

(async () => {
    const prompt = await cli.input('What is your name?');
    cli.println(styler.background(colors.white).bold(`Hello ${prompt}!` + styler.color([71, 1, 1]).italic(" (this is italic)")));

    const error = styler.bold.color(colors.red);

    cli.println(error('This is an error message!'));

    const animation = {
        frames: ["[-----]", "[=----]", "[==---]", "[===--]", "[====-]", "[=====]"],
        end: "✅"
    }

    renderer.render([
        [ "uploading", animation ],
        [ "downloading", animation ]
    ], 5000);
})();