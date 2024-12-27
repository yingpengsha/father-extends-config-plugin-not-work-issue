import { defineConfig } from "father";

export default defineConfig({
  // ! umd bundle is work, prove that extends work
  umd: {}, 
  // !plugin is not work, console will not log 'plugin is running'
  plugins: ['./plugin.ts'] 
})