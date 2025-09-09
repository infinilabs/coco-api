import type * as nodejs_fs from 'fs';

type ReaddirCallback = (err: NodeJS.ErrnoException | null, files: string[]) => void;
type ReaddirWithFileTypesCallback = (err: NodeJS.ErrnoException | null, files: nodejs_fs.Dirent[]) => void;

/**
 * Asynchronously reads the contents of a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param callback The callback function.
 */
export function readdir(path: nodejs_fs.PathLike, callback: ReaddirCallback): void;

/**
 * Asynchronously reads the contents of a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If `withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.
 * @param callback The callback function.
 */
export function readdir(path: nodejs_fs.PathLike, options: { encoding: BufferEncoding | null; withFileTypes?: false } | BufferEncoding | undefined | null, callback: ReaddirCallback): void;

/**
 * Asynchronously reads the contents of a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If `withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.
 * @param callback The callback function.
 */
export function readdir(path: nodejs_fs.PathLike, options: { encoding?: BufferEncoding | null; withFileTypes: true }, callback: ReaddirWithFileTypesCallback): void;

export function readdir(path: nodejs_fs.PathLike, options: any, callback?: any): void {
  throw new Error("Not implemented");
}
