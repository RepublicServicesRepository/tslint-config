# tslint-config

Republic Services code formatting/style rules.

## Notes

This is duplicated as `index.ts` (for builds) and `index.js` because I can't figure out how to get the builder to build this without generating a module with either an empty config or circular references to nothing.

The `index.js` copy is needed for direct inclusion and use within the design-core monorepo.

> ⚠️ ***If you change any rule, update both copies***

I recommend updating the `index.js` first, to test the effects of the changes in subprojects of the monorepo, then update the `index.ts` to match when ready.

Hopefully just temporary :)
