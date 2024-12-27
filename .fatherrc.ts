import { defineConfig } from "father"

export default defineConfig({
  cjs: {},
  esm: {},
  // ! using plugin directly, console will log 'plugin is running'
  plugins: ['./plugin.ts']

  // ! not work
  // extends: './.father.forward.ts',
})
