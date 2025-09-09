import type * as nodejs_fs from 'fs';
import { requestFromIFrame } from './utils';

/**
 * Asynchronously reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options An optional object
 * - encoding: The encoding of the file names. Default: 'utf8'
 * - withFileTypes: If true, the return value will be an array of `fs.Dirent` objects. Default: false
 * - recursive: If true, walk directory recursively. Default: false
 * @return An array of file names if options.withFileTypes is false.
 * Otherwise, returns an array of `fs.Dirent`
 */
export function readdir(
    path: nodejs_fs.PathLike,
    options?: {
        encoding: BufferEncoding | null;
        withFileTypes?: boolean;
        recursive: boolean;
    },
): Promise<string[] | nodejs_fs.Dirent[]>;

export function readdir(
    path: nodejs_fs.PathLike,
    options?: {
        encoding: BufferEncoding | null;
        withFileTypes?: boolean;
        recursive: boolean;
    },
): Promise<string[] | nodejs_fs.Dirent[]> {
    return requestFromIFrame({
        command: 'readdir',
        path: path.toString(),
        options,
    });
}
