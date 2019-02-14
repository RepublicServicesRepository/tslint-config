#!/usr/bin/env bash

lerna list -p 2>/dev/null |\
  sed -e "s|$PWD/||g" |\
  xargs -I {} yarn workspace-schematic ng-packagr-config-dest --path={}
