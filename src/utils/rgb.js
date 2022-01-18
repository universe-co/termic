class RGB {
    /**
     * 
     * @param {array} arr 
     * @returns 
     */
    isRGB(arr) {
        if (arr?.length !== 3) return false;
        for (const color of arr) {
            if (!(typeof color === "number") || !(color >= 0) || !(color <= 255)) return false;
        }
        return true;
    }
}

module.exports = new RGB();