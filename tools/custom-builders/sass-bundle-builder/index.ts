import {
  Builder,
  BuilderConfiguration,
  BuilderContext,
  BuildEvent
} from '@angular-devkit/architect';
import { getSystemPath } from '@angular-devkit/core';
import { writeFile } from 'fs';
import { bindNodeCallback, from, Observable, of } from 'rxjs';
import { catchError, flatMap, map, tap } from 'rxjs/operators';
import { Bundler } from 'scss-bundle';
import { SassBundleBuilderSchema } from './schema';

export default class SassBundleBuilder
  implements Builder<SassBundleBuilderSchema> {
  constructor(private context: BuilderContext) {}

  run(
    builderConfig: BuilderConfiguration<Partial<SassBundleBuilderSchema>>
  ): Observable<BuildEvent> {
    const root = this.context.workspace.root;
    const { sassEntryDir, sassEntryFile, outputPath } = builderConfig.options;
    const entryDir = `${getSystemPath(root)}/${sassEntryDir}`;
    const entryFile = `${sassEntryFile}`;
    const outPath = `${getSystemPath(root)}/${outputPath}`;
    const writeFile$ = bindNodeCallback(writeFile);
    const bundler = new Bundler(undefined, entryDir);

    return from(bundler.Bundle(`./${entryFile}`)).pipe(
      map(({ found, bundledContent }) => {
        if (found && bundledContent) {
          return bundledContent;
        }

        return '';
      }),
      flatMap(bundle => {
        return writeFile$(outPath, bundle).pipe(
          map(() => ({ success: true })),
          tap(() => this.context.logger.info('Sass File written')),
          catchError(e => {
            this.context.logger.error('Failed to create Sass bundle', e);

            return of({ success: false });
          })
        );
      })
    );
  }
}
