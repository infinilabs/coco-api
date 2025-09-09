import type * as nodejs_fs from 'fs';

/**
 * Asynchronously reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 *
 * @param options The encoding (or an object specifying the encoding), used as the
 * encoding of the result. If `withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.
 */
export function readdir(
    path: nodejs_fs.PathLike,
    options?:
        | { encoding: BufferEncoding | null; withFileTypes?: false }
        | BufferEncoding
        | null,
): Promise<string[]>;

/**
 * Asynchronously reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 *
 * @param options If `withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.
 */
export function readdir(
    path: nodejs_fs.PathLike,
    options: { encoding?: BufferEncoding | null; withFileTypes: true },
): Promise<nodejs_fs.Dirent[]>;

/**
 * Asynchronously reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 *
 * @param options The encoding (or an object specifying the encoding), used as the
 * encoding of the result. If `withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.
 */
export function readdir(
    path: nodejs_fs.PathLike,
    options?:
        | { encoding?: BufferEncoding | null; withFileTypes?: boolean }
        | BufferEncoding
        | null,
): Promise<string[] | nodejs_fs.Dirent[]>;

export function readdir(
    path: nodejs_fs.PathLike,
    options?: any,
): Promise<string[] | nodejs_fs.Dirent[]> {
    throw new Error('Not implemented');
}
