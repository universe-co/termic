class FPS {
    /**
     * 
     * @param {number} frame 
     * @param {number} length 
     * @returns {number}
     */
    frameFromFrames(frame, length) {
        while (frame > length) {
            frame -= length;
        }
        return frame;
    }
}

module.exports = new FPS();