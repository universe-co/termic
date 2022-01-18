class CliColorizer {
    #bg = "";
    #color = "";
    #value = "";
    constructor() {
    }
    /**
     * 
     * @param {number[]} rgb 
     * @returns {CliColorize}
     */
    text(rgb) {
        this.#color += "\x1b[38;2;" + rgb[0] + ";" + rgb[1] + ";" + rgb[2] + "m";
        return this;
    }
    /**
     * 
     * @param {number[]} rgb 
     * @returns {CliColorize}
     */
    background(rgb) {
        this.#bg += "\x1b[48;2;" + rgb[0] + ";" + rgb[1] + ";" + rgb[2] + "m";
        return this;
    }
    /**
     * 
     * @param {string} str
     * @returns {string}
     */
    valueOf(str = this.#value) {
        const result = this.#bg + this.#color + str + "\x1b[0m";
        this.#bg = this.#color = "";
        return result;
    }
    /**
     * 
     * @param {string} str
     * @returns {string}
     */
    toString(str = this.#value) {
        const result = this.#bg + this.#color + str + "\x1b[0m";
        this.#bg = this.#color = "";
        return result;
    }
}

module.exports = new CliColorizer();