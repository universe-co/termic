class FPS {
    /**
     * 
     * @param {number} frame 
     * @param {number} length 
     * @returns {number}
     */
    frameFromFrames(frame: number, length: number): number {
        while (frame > length) {
            frame -= length;
        }
        return frame;
    }
}

export default new FPS();