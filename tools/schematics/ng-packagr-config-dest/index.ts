import {
  chain,
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';
import { PathFragment } from '@angular-devkit/core';

const destination = './dist/';

export default function(schema: any): Rule {
  return chain([
    function(tree: Tree, _context: SchematicContext) {
      let path: string;

      if (
        schema.path.startsWith('libs/') ||
        schema.path.startsWith('./libs/')
      ) {
        path = schema.path;
      } else {
        path = `libs/${schema.path}`;
      }

      const filePath = `${path}/ng-package.json` as PathFragment;
      const config = JSON.parse(tree.root.file(filePath).content.toString());

      if (config.dest !== destination) {
        config.dest = destination;

        tree.overwrite(filePath, JSON.stringify(config, null, 2));
      }

      return tree;
    }
  ]);
}
