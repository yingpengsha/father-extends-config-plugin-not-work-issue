# father-extends-config-plugin-not-work-issue

## how to reproduce

modify `.fatherrc` like this:

```typescript
import { defineConfig } from "father"

export default defineConfig({
  cjs: {},
  esm: {},
  // ! using plugin directly, console will log 'plugin is running'
  // plugins: ['./plugin.ts']

  // ! not work
  extends: './.father.forward.ts',
})
```

then run `pnpm run build`, you will not see the log:

```shell
info  - [plugin: ./plugin.ts] plugin is running
```

## expected behavior

father should load the config from `extends` path, and run the plugin.

the console should log:

```shell
info  - [plugin: ./plugin.ts] plugin is running
```