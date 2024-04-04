/**
 *
 * @param {number} frame
 * @param {number} length
 * @returns {number}
 */
export function frameFromFrames(frame: number, length: number): number {
	while (frame > length) {
		frame -= length;
	}
	return frame;
}
