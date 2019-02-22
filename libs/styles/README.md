# styles

> ⚠️ This package can be built but its package is incomplete for deployment to the internal npm package registry

## Overview

The styles are built using a custom `sass-bundle-builder` builder found in the `tools/custom-builders` folder. This builder will simply package up the styles and assets to be included in external registry. This builder for the **styles** library is configured in the root `angular.json` file.

## Build

If any scss files are updated or added they must be imported in `core.scss` so they are included in the bundle. Running `ng build styles` in the root project will rebuild the sass bundle for distribution.

## Distribute to the NPM registry

> ⚠️ This is still ar work in progress.
