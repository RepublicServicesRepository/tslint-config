'use strict';
exports.__esModule = true;
var core_1 = require('@angular-devkit/core');
var fs_1 = require('fs');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var scss_bundle_1 = require('scss-bundle');
var SassBundleBuilder = /** @class */ (function() {
  function SassBundleBuilder(context) {
    this.context = context;
  }
  SassBundleBuilder.prototype.run = function(builderConfig) {
    var _this = this;
    var root = this.context.workspace.root;
    var _a = builderConfig.options,
      sassEntryDir = _a.sassEntryDir,
      sassEntryFile = _a.sassEntryFile,
      outputPath = _a.outputPath;
    var entryDir = core_1.getSystemPath(root) + '/' + sassEntryDir;
    var entryFile = '' + sassEntryFile;
    var outPath = core_1.getSystemPath(root) + '/' + outputPath;
    var writeFile$ = rxjs_1.bindNodeCallback(fs_1.writeFile);
    var bundler = new scss_bundle_1.Bundler(undefined, entryDir);
    return rxjs_1.from(bundler.Bundle('./' + entryFile)).pipe(
      operators_1.map(function(_a) {
        var found = _a.found,
          bundledContent = _a.bundledContent;
        if (found && bundledContent) {
          return bundledContent;
        }
        return '';
      }),
      operators_1.flatMap(function(bundle) {
        return writeFile$(outPath, bundle).pipe(
          operators_1.map(function() {
            return { success: true };
          }),
          operators_1.tap(function() {
            return _this.context.logger.info('Sass File written');
          }),
          operators_1.catchError(function(e) {
            _this.context.logger.error('Failed to create Sass bundle', e);
            return rxjs_1.of({ success: false });
          })
        );
      })
    );
  };
  return SassBundleBuilder;
})();
exports['default'] = SassBundleBuilder;
