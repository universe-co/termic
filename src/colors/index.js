class Colors{
    get black() {
        return [0, 0, 0];
    }
    get red() {
        return [255, 0, 0];
    }
    get green() {
        return [0, 255, 0];
    }
    get yellow() {
        return [255, 255, 0];
    }
    get blue() {
        return [0, 0, 255];
    }
    get magenta() {
        return [255, 0, 255];
    }
    get cyan() {
        return [0, 255, 255];
    }
    get white() {
        return [255, 255, 255];
    }
    get grey() {
        return [128, 128, 128];
    }
    get orange() {
        return [255, 165, 0];
    }
}

module.exports = new Colors;