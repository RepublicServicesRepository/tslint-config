export interface SassBundleBuilderSchema {
  /**
   * The name of the sass entry-point directory.
   */
  sassEntryDir: string;

  /**
   * The name of the sass entry-point file.
   */
  sassEntryFile: string;

  /**
   * The path and filename to output.
   */
  outputPath: string;
}
