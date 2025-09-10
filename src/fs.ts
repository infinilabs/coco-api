import { oneshotRequest } from './utils.js';

/**
 * Asynchronously reads the contents of a directory.
 */
export function readDir(
    path: String
): Promise<string[]>;

export function readDir(
    path: String,
): Promise<string[]> {
    return oneshotRequest({
        command: 'readDir',
        path: path,
    });
}
